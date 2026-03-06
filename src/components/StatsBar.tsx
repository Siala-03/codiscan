import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
interface StatItem {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
}
const stats: StatItem[] = [
{
  value: '10+',
  numericValue: 10,
  suffix: '+',
  label: 'Equipment Types'
},
{
  value: '20+',
  numericValue: 20,
  suffix: '+',
  label: 'Partner Clinics'
},
{
  value: '3-Year',
  numericValue: 5,
  suffix: '-Year',
  label: 'Warranty Support'
},
{
  value: '48hr',
  numericValue: 48,
  suffix: 'hr',
  label: 'Delivery'
}];

function CountUp({
  target,
  suffix,
  started




}: {target: number;suffix: string;started: boolean;}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [started, target]);
  return (
    <span>
      {count}
      {suffix}
    </span>);

}
export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-80px'
  });
  return (
    <section
      ref={ref}
      className="w-full bg-[#0d1b2a] border-t border-b border-white/10 py-12"
      aria-label="Key statistics">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, index) =>
          <motion.div
            key={stat.label}
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={
            isInView ?
            {
              opacity: 1,
              y: 0
            } :
            {}
            }
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            className={`flex flex-col items-center text-center px-6 ${index < stats.length - 1 ? 'lg:border-r lg:border-white/15' : ''}`}>

              <span
              className="text-4xl sm:text-5xl font-extrabold text-white mb-1"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>

                {stat.numericValue > 10 ?
              <CountUp
                target={stat.numericValue}
                suffix={stat.suffix}
                started={isInView} /> :


              stat.value
              }
              </span>
              <span className="text-[#06b6d4] text-sm font-semibold uppercase tracking-wider mt-1">
                {stat.label}
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}