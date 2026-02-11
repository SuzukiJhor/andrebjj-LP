import { Clock } from "lucide-react";

const schedule = [
    { day: "SEGUNDA", time: "20:30 – 21:30", category: "Adulto" },
    { day: "QUARTA", time: "20:30 – 21:30", category: "Adulto" },
    { day: "QUINTA", time: "20:30 – 21:30", category: "Adulto" },
];

const ScheduleSection = () => {
    return (
        <section id="horarios" className="py-20 md:py-28 px-6 bg-background">
            <div className="max-w-4xl mx-auto">
                <h2 className="font-heading text-3xl md:text-5xl uppercase text-center tracking-wider mb-4 text-gold-gradient">
                    HORÁRIOS
                </h2>
                <div className="w-16 h-0.5 bg-primary/40 mx-auto mb-16" />

                <div className={`space-y-4 animate-fade-up`}>
                    {schedule.map((s, i) => (
                        <div
                            key={s.day}
                            className="group flex items-center justify-between bg-card border border-gold rounded-sm px-6 md:px-10 py-5 transition-all duration-300 glow-gold-hover hover:scale-[1.01]"
                            style={{ animationDelay: `${i * 100}ms` }}
                        >
                            <div className="flex items-center gap-4">
                                <Clock className="w-5 h-5 text-primary hidden sm:block" />
                                <span className="font-heading text-lg md:text-xl uppercase tracking-wider text-foreground">
                                    {s.day}
                                </span>
                            </div>
                            <span className="font-body text-base md:text-lg text-muted-foreground font-light">
                                {s.time}
                            </span>
                            <span className="font-body text-xs uppercase tracking-widest text-secondary font-semibold hidden sm:block">
                                {s.category}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ScheduleSection;
