import { motion } from "framer-motion";
import { useState } from "react";

interface ScheduleItem {
  no: string;
  time: string;
  drink: string;
  status: "ON TIME" | "BREWING" | "DELAYED";
  price: string;
}

const scheduleData: ScheduleItem[] = [
  { no: "01", time: "08:00", drink: "MORNING LATTE", status: "ON TIME", price: "₹250" },
  { no: "02", time: "10:30", drink: "AMERICANO", status: "BREWING", price: "₹200" },
  { no: "03", time: "13:00", drink: "MATCHA LATTE", status: "DELAYED", price: "₹300" },
  { no: "04", time: "15:00", drink: "COLD BREW", status: "ON TIME", price: "₹280" },
  { no: "05", time: "17:30", drink: "CORTADO", status: "BREWING", price: "₹220" },
  { no: "06", time: "19:00", drink: "DIRTY MATCHA", status: "ON TIME", price: "₹320" },
];

const Timetable = () => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "ON TIME":
        return "bg-green-100 text-green-800 border-green-800";
      case "BREWING":
        return "bg-ink text-canvas border-ink";
      case "DELAYED":
        return "bg-red-100 text-red-800 border-red-800";
      default:
        return "";
    }
  };

  return (
    <section className="py-20 px-6 bg-canvas">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 bg-terracotta rounded-full"
            />
            <div className="mono-font text-xs text-chrome">// LIVE SCHEDULE</div>
          </div>
          <h2 className="display-font text-6xl md:text-8xl">DAILY FIX</h2>
        </div>

        {/* Timetable */}
        <div className="brutalist-border-2 bg-canvas overflow-x-auto">
          {/* Header Row */}
          <div className="grid grid-cols-12 gap-4 p-4 md:p-6 chrome-border border-b bg-ink text-canvas">
            <div className="col-span-1 mono-font text-xs font-bold">NO.</div>
            <div className="col-span-2 mono-font text-xs font-bold hidden md:block">TIME</div>
            <div className="col-span-5 md:col-span-4 mono-font text-xs font-bold">DESTINATION</div>
            <div className="col-span-3 md:col-span-3 mono-font text-xs font-bold hidden md:block">STATUS</div>
            <div className="col-span-6 md:col-span-2 mono-font text-xs font-bold text-right">FARE</div>
          </div>

          {/* Data Rows */}
          {scheduleData.map((item, index) => (
            <motion.div
              key={item.no}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredRow(index)}
              onHoverEnd={() => setHoveredRow(null)}
              className={`grid grid-cols-12 gap-4 p-4 md:p-6 chrome-border border-b transition-colors duration-300 ${
                hoveredRow === index ? "bg-terracotta/10" : "bg-canvas"
              }`}
            >
              <div className="col-span-1 mono-font text-sm font-bold text-chrome">{item.no}</div>
              <div className="col-span-2 mono-font text-sm hidden md:block">{item.time}</div>
              <div className="col-span-5 md:col-span-4 serif-font text-lg md:text-xl font-bold">
                {item.drink}
              </div>
              <div className="col-span-3 mono-font text-xs hidden md:flex items-center">
                <span
                  className={`px-3 py-1 brutalist-border ${getStatusStyle(item.status)}`}
                >
                  {item.status}
                </span>
              </div>
              <div className="col-span-6 md:col-span-2 mono-font text-lg font-bold text-right">
                {item.price}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="mono-font text-xs text-chrome">
            SCHEDULE UPDATES EVERY 30 MINUTES
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-100 brutalist-border" />
              <span className="mono-font text-xs">AVAILABLE</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-ink" />
              <span className="mono-font text-xs">PREPARING</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-100 brutalist-border" />
              <span className="mono-font text-xs">LIMITED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timetable;
