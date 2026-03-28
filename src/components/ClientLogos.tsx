import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Import all 49 PNGs individually
import client1 from "@/assets/1.png";
import client2 from "@/assets/2.png";
import client3 from "@/assets/3.png";
import client4 from "@/assets/4.png";
import client5 from "@/assets/5.png";
import client6 from "@/assets/6.png";
import client7 from "@/assets/7.png";
import client8 from "@/assets/8.png";
import client9 from "@/assets/9.png";
import client10 from "@/assets/10.png";
import client11 from "@/assets/11.png";
import client12 from "@/assets/12.png";
import client13 from "@/assets/13.png";
import client14 from "@/assets/14.png";
import client15 from "@/assets/15.png";
import client16 from "@/assets/16.png";
import client17 from "@/assets/17.png";
import client18 from "@/assets/18.png";
import client19 from "@/assets/19.png";
import client20 from "@/assets/20.png";
import client21 from "@/assets/21.png";
import client22 from "@/assets/22.png";
import client23 from "@/assets/23.png";
import client24 from "@/assets/24.png";
import client25 from "@/assets/25.png";
import client26 from "@/assets/26.png";
import client27 from "@/assets/27.png";
import client28 from "@/assets/28.png";
import client29 from "@/assets/29.png";
import client30 from "@/assets/30.png";
import client31 from "@/assets/31.png";
import client32 from "@/assets/32.png";
import client33 from "@/assets/33.png";
import client34 from "@/assets/34.png";
import client35 from "@/assets/35.png";
import client36 from "@/assets/36.png";
import client37 from "@/assets/37.png";
import client38 from "@/assets/38.png";
import client39 from "@/assets/39.png";
import client40 from "@/assets/40.png";
import client41 from "@/assets/41.png";
import client42 from "@/assets/42.png";
import client43 from "@/assets/43.png";
import client44 from "@/assets/44.png";
import client45 from "@/assets/45.png";
import client46 from "@/assets/46.png";
import client47 from "@/assets/47.png";
import client48 from "@/assets/48.png";
import client49 from "@/assets/49.png";

// Explicit array of clients
const clients = [
  { name: "Client 1", logo: client1 },
  { name: "Client 2", logo: client2 },
  { name: "Client 3", logo: client3 },
  { name: "Client 4", logo: client4 },
  { name: "Client 5", logo: client5 },
  { name: "Client 6", logo: client6 },
  { name: "Client 7", logo: client7 },
  { name: "Client 8", logo: client8 },
  { name: "Client 9", logo: client9 },
  { name: "Client 10", logo: client10 },
  { name: "Client 11", logo: client11 },
  { name: "Client 12", logo: client12 },
  { name: "Client 13", logo: client13 },
  { name: "Client 14", logo: client14 },
  { name: "Client 15", logo: client15 },
  { name: "Client 16", logo: client16 },
  { name: "Client 17", logo: client17 },
  { name: "Client 18", logo: client18 },
  { name: "Client 19", logo: client19 },
  { name: "Client 20", logo: client20 },
  { name: "Client 21", logo: client21 },
  { name: "Client 22", logo: client22 },
  { name: "Client 23", logo: client23 },
  { name: "Client 24", logo: client24 },
  { name: "Client 25", logo: client25 },
  { name: "Client 26", logo: client26 },
  { name: "Client 27", logo: client27 },
  { name: "Client 28", logo: client28 },
  { name: "Client 29", logo: client29 },
  { name: "Client 30", logo: client30 },
  { name: "Client 31", logo: client31 },
  { name: "Client 32", logo: client32 },
  { name: "Client 33", logo: client33 },
  { name: "Client 34", logo: client34 },
  { name: "Client 35", logo: client35 },
  { name: "Client 36", logo: client36 },
  { name: "Client 37", logo: client37 },
  { name: "Client 38", logo: client38 },
  { name: "Client 39", logo: client39 },
  { name: "Client 40", logo: client40 },
  { name: "Client 41", logo: client41 },
  { name: "Client 42", logo: client42 },
  { name: "Client 43", logo: client43 },
  { name: "Client 44", logo: client44 },
  { name: "Client 45", logo: client45 },
  { name: "Client 46", logo: client46 },
  { name: "Client 47", logo: client47 },
  { name: "Client 48", logo: client48 },
  { name: "Client 49", logo: client49 },
];

const ClientLogos = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Double the array for seamless marquee loop
  const doubled = [...clients, ...clients];

  return (
    <section className="py-20 bg-secondary overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-sans text-sm font-semibold tracking-widest uppercase text-muted-foreground">
            Trusted by Leading Organizations
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        <div className="flex animate-marquee">
          {doubled.map((client, i) => (
<div
  key={`${client.name}-${i}`}
  className="flex-shrink-0 mx-8 flex items-center justify-center p-4 opacity-100 hover:opacity-100 transition-all duration-300"
>
              <img
                src={client.logo}
                alt={client.name}
                className="h-14 sm:h-14 md:h-20 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ClientLogos;
