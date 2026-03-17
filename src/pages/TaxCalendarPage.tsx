import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { CalendarDays, AlertCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const taxDates = [
  { day: 9, title: "PAYE Returns", description: "Pay As You Earn tax filing deadline for employers.", recurring: "monthly" },
  { day: 20, title: "VAT Returns", description: "Value Added Tax returns submission deadline.", recurring: "monthly" },
  { day: 20, title: "Excise Duty Returns", description: "Filing of excise duty returns for applicable goods and services.", recurring: "monthly" },
  { day: 20, title: "Withholding Tax", description: "Remittance of withholding tax deducted during the month.", recurring: "monthly" },
  { day: 30, month: 3, title: "Individual Tax Returns", description: "Annual income tax return filing deadline for individuals.", recurring: "annual" },
  { day: 30, month: 5, title: "Corporate Tax Returns", description: "Annual income tax return filing for companies with December year-end.", recurring: "annual" },
  { day: 20, month: 3, title: "Instalment Tax (1st)", description: "First instalment of corporate estimated tax.", recurring: "quarterly" },
  { day: 20, month: 5, title: "Instalment Tax (2nd)", description: "Second instalment of corporate estimated tax.", recurring: "quarterly" },
  { day: 20, month: 8, title: "Instalment Tax (3rd)", description: "Third instalment of corporate estimated tax.", recurring: "quarterly" },
  { day: 20, month: 11, title: "Instalment Tax (4th)", description: "Fourth instalment of corporate estimated tax.", recurring: "quarterly" },
];

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

function getTaxEventsForDay(month: number, day: number) {
  return taxDates.filter((t) => {
    if (t.recurring === "monthly") return t.day === day;
    if (t.recurring === "annual" && t.month !== undefined) return t.month === month && t.day === day;
    if (t.recurring === "quarterly" && t.month !== undefined) return t.month === month && t.day === day;
    return false;
  });
}

const TaxCalendarPage = () => {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfWeek(year, month);

  const prev = () => {
    if (month === 0) { setMonth(11); setYear(year - 1); }
    else setMonth(month - 1);
    setSelectedDay(null);
  };

  const next = () => {
    if (month === 11) { setMonth(0); setYear(year + 1); }
    else setMonth(month + 1);
    setSelectedDay(null);
  };

  const selectedEvents = selectedDay ? getTaxEventsForDay(month, selectedDay) : [];

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        <PageHeader title="Tax Calendar" breadcrumb="Tax Calendar" />

        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-10">
              <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
                Stay on top of your tax obligations. Days highlighted in gold have filing or payment deadlines.
              </p>
            </div>

            {/* Calendar */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-oxford">
              {/* Calendar Header */}
              <div className="bg-oxford px-4 md:px-6 py-4 flex items-center justify-between">
                <button onClick={prev} className="text-primary-foreground/70 hover:text-gold transition-colors p-2">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <h2 className="font-sans text-lg font-bold text-primary-foreground">
                  {monthNames[month]} {year}
                </h2>
                <button onClick={next} className="text-primary-foreground/70 hover:text-gold transition-colors p-2">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Weekday Headers */}
              <div className="grid grid-cols-7 border-b border-border">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                  <div key={d} className="py-2 md:py-3 text-center font-sans text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {d}
                  </div>
                ))}
              </div>

              {/* Days Grid */}
              <div className="grid grid-cols-7">
                {Array.from({ length: firstDay }).map((_, i) => (
                  <div key={`empty-${i}`} className="aspect-square border-b border-r border-border/50" />
                ))}
                {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
                  const events = getTaxEventsForDay(month, day);
                  const hasEvents = events.length > 0;
                  const isSelected = selectedDay === day;
                  const isToday = day === now.getDate() && month === now.getMonth() && year === now.getFullYear();

                  return (
                    <button
                      key={day}
                      onClick={() => setSelectedDay(isSelected ? null : day)}
                      className={`aspect-square border-b border-r border-border/50 flex flex-col items-center justify-center gap-0.5 transition-colors relative ${
                        isSelected
                          ? "bg-oxford text-primary-foreground"
                          : hasEvents
                          ? "bg-accent/10 hover:bg-accent/20"
                          : "hover:bg-secondary"
                      }`}
                    >
                      <span className={`font-sans text-sm md:text-base font-medium ${
                        isToday ? "text-gold font-bold" : isSelected ? "text-primary-foreground" : "text-foreground"
                      }`}>
                        {day}
                      </span>
                      {hasEvents && (
                        <div className="flex gap-0.5">
                          {events.slice(0, 3).map((_, ei) => (
                            <div key={ei} className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full ${isSelected ? "bg-gold" : "bg-gold"}`} />
                          ))}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Selected Day Events */}
              {selectedDay && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="border-t border-border overflow-hidden"
                >
                  <div className="p-4 md:p-6">
                    <h3 className="font-sans text-sm font-semibold text-foreground mb-3">
                      {monthNames[month]} {selectedDay}, {year}
                    </h3>
                    {selectedEvents.length > 0 ? (
                      <div className="space-y-3">
                        {selectedEvents.map((event, i) => (
                          <div key={i} className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg">
                            <CalendarDays className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-sans text-sm font-semibold text-foreground">{event.title}</p>
                              <p className="font-sans text-xs text-muted-foreground mt-0.5">{event.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="font-sans text-sm text-muted-foreground">No tax deadlines on this date.</p>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Disclaimer */}
              <div className="bg-secondary/50 px-4 md:px-6 py-3 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <p className="font-sans text-xs text-muted-foreground">
                  Dates are based on Kenya Revenue Authority guidelines. Always confirm deadlines with your tax advisor.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default TaxCalendarPage;
