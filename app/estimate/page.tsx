"use client";

import { useState } from "react";
import {
    Hammer, MessageSquare, Construction, Paintbrush,
    ChevronRight, MapPin, Check, ArrowLeft,
    Send, Layout as LayoutIcon, User, Building, Clock,
    Utensils, Briefcase, Store, Home, Bath, Sofa, Bed,
    Trees, Layers, DoorOpen, Warehouse, PenTool,
    Hash, Triangle, Sparkles, Wrench, Ruler,
    Fence, DoorClosed, Square, Grid3x3, Box, Pipette,
    PaintRoller, Construction as ConstructionIcon, Plus,
    Mail, Phone
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// servicios principales (los mas comunes primero)
const MAIN_SERVICES = [
    { id: "Construction", icon: <Construction size={32} /> },
    { id: "Remodeling", icon: <Hammer size={32} /> },
    { id: "Painting", icon: <Paintbrush size={32} /> },
    { id: "Metal Works", icon: <Layers size={32} /> }
];

// servicios extra (se muestran al hacer click en "more")
const EXTRA_SERVICES = [
    { id: "Concrete", icon: <Briefcase size={32} /> },
    { id: "Drywall & Framing", icon: <Ruler size={32} /> },
    { id: "Repairs", icon: <Wrench size={32} /> },
    { id: "Interior Design", icon: <Sofa size={32} /> }
];

type AreaItem = { id: string; icon: React.ReactNode };

const SERVICE_AREAS: Record<string, { Residential: AreaItem[]; Commercial: AreaItem[] }> = {
    "Construction": {
        Residential: [
            { id: "Full House", icon: <Home size={20} /> },
            { id: "ADU / Granny Flat", icon: <Box size={20} /> },
            { id: "Room Addition", icon: <Square size={20} /> },
            { id: "Garage", icon: <Warehouse size={20} /> }
        ],
        Commercial: [
            { id: "New Building", icon: <Building size={20} /> },
            { id: "Office Buildout", icon: <Briefcase size={20} /> },
            { id: "Warehouse", icon: <Warehouse size={20} /> },
            { id: "Retail Space", icon: <Store size={20} /> }
        ]
    },
    "Remodeling": {
        Residential: [
            { id: "Kitchen", icon: <Utensils size={20} /> },
            { id: "Bathroom", icon: <Bath size={20} /> },
            { id: "Living Room", icon: <Sofa size={20} /> },
            { id: "Bedroom", icon: <Bed size={20} /> },
            { id: "Full House", icon: <Home size={20} /> },
            { id: "Backyard", icon: <Trees size={20} /> }
        ],
        Commercial: [
            { id: "Office Space", icon: <Briefcase size={20} /> },
            { id: "Restaurant / Bar", icon: <Utensils size={20} /> },
            { id: "Retail / Storefront", icon: <Store size={20} /> },
            { id: "Lobby / Reception", icon: <DoorOpen size={20} /> },
            { id: "Full Renovation", icon: <ConstructionIcon size={20} /> }
        ]
    },
    "Painting": {
        Residential: [
            { id: "Interior Walls", icon: <PaintRoller size={20} /> },
            { id: "Exterior Walls", icon: <Paintbrush size={20} /> },
            { id: "Cabinets", icon: <Square size={20} /> },
            { id: "Trim & Doors", icon: <DoorClosed size={20} /> },
            { id: "Full House", icon: <Home size={20} /> }
        ],
        Commercial: [
            { id: "Interior Walls", icon: <PaintRoller size={20} /> },
            { id: "Exterior Facade", icon: <Paintbrush size={20} /> },
            { id: "Industrial Coating", icon: <Pipette size={20} /> },
            { id: "Signage", icon: <PenTool size={20} /> }
        ]
    },
    "Metal Works": {
        Residential: [
            { id: "Fences", icon: <Fence size={20} /> },
            { id: "Gates", icon: <DoorClosed size={20} /> },
            { id: "Railings", icon: <Grid3x3 size={20} /> },
            { id: "Stairs", icon: <Triangle size={20} /> },
            { id: "Window Bars", icon: <Square size={20} /> },
            { id: "Custom Welding", icon: <Wrench size={20} /> }
        ],
        Commercial: [
            { id: "Security Gates", icon: <Fence size={20} /> },
            { id: "Steel Framing", icon: <Layers size={20} /> },
            { id: "Railings", icon: <Grid3x3 size={20} /> },
            { id: "Stairs", icon: <Triangle size={20} /> },
            { id: "Storefront Metal", icon: <Store size={20} /> },
            { id: "Custom Fabrication", icon: <Wrench size={20} /> }
        ]
    },
    "Concrete": {
        Residential: [
            { id: "Driveway", icon: <Square size={20} /> },
            { id: "Patio", icon: <Grid3x3 size={20} /> },
            { id: "Foundation", icon: <Layers size={20} /> },
            { id: "Walkway", icon: <Ruler size={20} /> },
            { id: "Retaining Wall", icon: <Box size={20} /> }
        ],
        Commercial: [
            { id: "Parking Lot", icon: <Square size={20} /> },
            { id: "Foundation", icon: <Layers size={20} /> },
            { id: "Loading Dock", icon: <Warehouse size={20} /> },
            { id: "Decorative Concrete", icon: <Grid3x3 size={20} /> },
            { id: "Retaining Wall", icon: <Box size={20} /> }
        ]
    },
    "Drywall & Framing": {
        Residential: [
            { id: "Interior Walls", icon: <Square size={20} /> },
            { id: "Ceiling", icon: <Layers size={20} /> },
            { id: "Room Addition", icon: <Box size={20} /> },
            { id: "Repairs", icon: <Wrench size={20} /> },
            { id: "Full House", icon: <Home size={20} /> }
        ],
        Commercial: [
            { id: "Office Partitions", icon: <Briefcase size={20} /> },
            { id: "Ceiling Systems", icon: <Layers size={20} /> },
            { id: "Steel Framing", icon: <Ruler size={20} /> },
            { id: "Full Buildout", icon: <Building size={20} /> }
        ]
    },
    "Repairs": {
        Residential: [
            { id: "Kitchen", icon: <Utensils size={20} /> },
            { id: "Bathroom", icon: <Bath size={20} /> },
            { id: "Roof", icon: <Triangle size={20} /> },
            { id: "Drywall", icon: <Square size={20} /> },
            { id: "Plumbing", icon: <Pipette size={20} /> },
            { id: "Emergency Repair", icon: <Wrench size={20} /> }
        ],
        Commercial: [
            { id: "Storefront", icon: <Store size={20} /> },
            { id: "Office", icon: <Briefcase size={20} /> },
            { id: "Roof", icon: <Triangle size={20} /> },
            { id: "Plumbing", icon: <Pipette size={20} /> },
            { id: "Emergency Repair", icon: <Wrench size={20} /> }
        ]
    },
    "Interior Design": {
        Residential: [
            { id: "Kitchen", icon: <Utensils size={20} /> },
            { id: "Bathroom", icon: <Bath size={20} /> },
            { id: "Living Room", icon: <Sofa size={20} /> },
            { id: "Bedroom", icon: <Bed size={20} /> },
            { id: "Full House", icon: <Home size={20} /> }
        ],
        Commercial: [
            { id: "Office Space", icon: <Briefcase size={20} /> },
            { id: "Restaurant / Bar", icon: <Utensils size={20} /> },
            { id: "Retail / Storefront", icon: <Store size={20} /> },
            { id: "Lobby / Reception", icon: <DoorOpen size={20} /> }
        ]
    }
};

const TIMELINES = [
    { id: "Ready to start", phrase: "as soon as possible" },
    { id: "In 1-3 Months", phrase: "within the next 1 to 3 months" },
    { id: "Just Planning", phrase: "soon — we're still in the planning phase" }
];

// datos de contacto
const CONTACT_EMAIL = "contact@antonioenriquezconstruction.com";
const CONTACT_PHONE = "+13237408161";

export default function ConstructionEstimate() {
    const [step, setStep] = useState(0); // empieza en 0 ahora (eleccion de metodo)
    const [showMoreServices, setShowMoreServices] = useState(false);
    const [projectId] = useState(() => Math.floor(Math.random() * 10000));
    const [data, setData] = useState({
        contactMethod: "" as "sms" | "email" | "",
        firstName: "",
        lastName: "",
        services: [] as string[],
        propertyType: "Residential" as "Residential" | "Commercial",
        areas: [] as string[],
        street: "",
        city: "",
        state: "",
        zip: "",
        timeline: "Ready to start",
        userEditedMessage: ""
    });

    const fullName = `${data.firstName} ${data.lastName}`.trim();
    const fullAddress = [data.street, data.city, data.state, data.zip].filter(Boolean).join(", ");
    const timelinePhrase = TIMELINES.find(t => t.id === data.timeline)?.phrase || "as soon as possible";

    const servicesText = data.services.length === 0
        ? "construction"
        : data.services.length === 1
            ? data.services[0].toLowerCase()
            : data.services.slice(0, -1).map(s => s.toLowerCase()).join(", ") + " and " + data.services[data.services.length - 1].toLowerCase();

    const areasText = data.areas.length === 0
        ? "space"
        : data.areas.length === 1
            ? data.areas[0].toLowerCase()
            : data.areas.slice(0, -1).map(a => a.toLowerCase()).join(", ") + " and " + data.areas[data.areas.length - 1].toLowerCase();

    // mensaje para sms (corto y directo)
    const smsMessage =
        `Hi Antonio, my name is ${fullName || "[Your Name]"}. ` +
        `I'd like a quote for a ${data.propertyType.toLowerCase()} project that includes ${servicesText} ` +
        `on my ${areasText}, located at ${fullAddress || "[address]"}. ` +
        `I'm hoping to start ${timelinePhrase}. Thank you!`;

    // mensaje para email (mas profesional con saludo y firma)
    const emailMessage =
        `Hello Antonio,\n\n` +
        `My name is ${fullName || "[Your Name]"} and I'd like to request a quote for a ${data.propertyType.toLowerCase()} project.\n\n` +
        `Services needed: ${data.services.join(", ") || "[services]"}\n` +
        `Target areas: ${data.areas.join(", ") || "[areas]"}\n` +
        `Project location: ${fullAddress || "[address]"}\n` +
        `Timeline: I'm hoping to start ${timelinePhrase}.\n\n` +
        `Please get back to me at your earliest convenience.\n\n` +
        `Thank you,\n${fullName || "[Your Name]"}`;

    const emailSubject = `Quote Request — ${data.propertyType} Project — ${fullName || "New Client"}`;

    const defaultMessage = data.contactMethod === "email" ? emailMessage : smsMessage;
    const finalMessage = data.userEditedMessage || defaultMessage;

    // generar link segun metodo elegido
    const encodedBody = encodeURIComponent(finalMessage);
    const encodedSubject = encodeURIComponent(emailSubject);

    const submitLink = data.contactMethod === "email"
        ? `mailto:${CONTACT_EMAIL}?subject=${encodedSubject}&body=${encodedBody}`
        : `sms:${CONTACT_PHONE}?&body=${encodedBody}`;

    const handleSubmit = () => {
        if (typeof window !== "undefined") {
            window.location.href = submitLink;
        }
    };

    const toggleService = (id: string) => {
        setData(prev => ({
            ...prev,
            services: prev.services.includes(id)
                ? prev.services.filter(s => s !== id)
                : [...prev.services, id],
            areas: prev.areas.filter(a => {
                const newServices = prev.services.includes(id)
                    ? prev.services.filter(s => s !== id)
                    : [...prev.services, id];
                return newServices.some(svc =>
                    SERVICE_AREAS[svc]?.[prev.propertyType]?.some(area => area.id === a)
                );
            })
        }));
    };

    const toggleArea = (id: string) => {
        setData(prev => ({
            ...prev,
            areas: prev.areas.includes(id)
                ? prev.areas.filter(a => a !== id)
                : [...prev.areas, id]
        }));
    };

    const combinedAreas: AreaItem[] = (() => {
        const seen = new Set<string>();
        const result: AreaItem[] = [];
        data.services.forEach(service => {
            const areas = SERVICE_AREAS[service]?.[data.propertyType] || [];
            areas.forEach(area => {
                if (!seen.has(area.id)) {
                    seen.add(area.id);
                    result.push(area);
                }
            });
        });
        return result;
    })();

    // lista de servicios visible (4 principales + extras si esta expandido)
    const visibleServices = showMoreServices ? [...MAIN_SERVICES, ...EXTRA_SERVICES] : MAIN_SERVICES;

    return (
        <section className="relative z-10 flex flex-col items-center justify-start min-h-[85vh] px-6 py-12 select-none">
            <div className="w-full max-w-5xl flex flex-col items-center relative z-20">

                {/* progress bar - ahora con 6 pasos (0 + 5) */}
                <div className="relative flex items-center justify-between w-full max-w-md mb-20 mx-auto z-30">
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="z-10 flex items-center justify-center">
                            <div className={cn(
                                "h-10 w-10 rounded-2xl flex items-center justify-center border transition-all duration-500 text-[10px] font-black",
                                step >= i
                                    ? "border-amber-500 bg-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.4)] scale-110"
                                    : "border-white/15 bg-white/5 text-zinc-500"
                            )}>
                                {step > i ? <Check size={14} strokeWidth={4} /> : i === 0 ? "✦" : i}
                            </div>
                        </div>
                    ))}
                    <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0" />
                </div>

                <div className="w-full flex flex-col items-center relative z-20">

                    {/* PASO 0 - METODO DE CONTACTO */}
                    {step === 0 && (
                        <div className="w-full space-y-12 animate-in fade-in zoom-in duration-700 flex flex-col items-center text-center max-w-3xl">
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/40 bg-amber-500/10">
                                    <Sparkles size={11} className="text-amber-400" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-400">
                                        Get Started
                                    </span>
                                </div>
                                <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none italic text-white">
                                    Contact.
                                </h1>
                                <p className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest pt-2">
                                    How would you like to send your quote request?
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                                {/* sms */}
                                <button
                                    type="button"
                                    onClick={() => { setData({ ...data, contactMethod: "sms" }); setStep(1); }}
                                    className="group relative p-10 rounded-[2.5rem] border border-white/10 bg-white/5 hover:bg-amber-500/10 hover:border-amber-500/50 transition-all duration-500 text-left z-30 block w-full overflow-hidden"
                                >
                                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/0 group-hover:bg-amber-500/15 blur-3xl rounded-full transition-all duration-700" />
                                    <div className="relative">
                                        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl border bg-amber-500/10 border-amber-500/20 text-amber-400 group-hover:bg-amber-500 group-hover:text-black group-hover:scale-110 transition-all pointer-events-none">
                                            <Phone size={32} />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter italic leading-none text-white mb-3">
                                            Text Message
                                        </h3>
                                        <p className="text-zinc-300 text-sm font-light leading-relaxed">
                                            Quick and direct — opens your SMS app with the message ready to send.
                                        </p>
                                        <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mt-4">
                                            (323) 740-8161
                                        </p>
                                    </div>
                                </button>

                                {/* email */}
                                <button
                                    type="button"
                                    onClick={() => { setData({ ...data, contactMethod: "email" }); setStep(1); }}
                                    className="group relative p-10 rounded-[2.5rem] border border-white/10 bg-white/5 hover:bg-amber-500/10 hover:border-amber-500/50 transition-all duration-500 text-left z-30 block w-full overflow-hidden"
                                >
                                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/0 group-hover:bg-amber-500/15 blur-3xl rounded-full transition-all duration-700" />
                                    <div className="relative">
                                        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl border bg-amber-500/10 border-amber-500/20 text-amber-400 group-hover:bg-amber-500 group-hover:text-black group-hover:scale-110 transition-all pointer-events-none">
                                            <Mail size={32} />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter italic leading-none text-white mb-3">
                                            Email
                                        </h3>
                                        <p className="text-zinc-300 text-sm font-light leading-relaxed">
                                            Formal request — opens your mail app with the full details organized.
                                        </p>
                                        <p className="text-amber-400 text-[10px] font-bold lowercase tracking-wider mt-4 break-all">
                                            contact@antonioenriquezconstruction.com
                                        </p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    )}

                    {/* PASO 1 - SERVICIOS */}
                    {step === 1 && (
                        <div className="w-full space-y-12 animate-in fade-in zoom-in duration-700 flex flex-col items-center text-center">
                            <div className="space-y-4">
                                <button
                                    type="button"
                                    onClick={() => setStep(0)}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 text-[10px] font-black text-zinc-300 hover:text-white hover:bg-white/10 uppercase tracking-[0.3em] mx-auto transition-all relative z-30"
                                >
                                    <ArrowLeft size={12} /> Back
                                </button>
                                <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none italic text-white">
                                    Services.
                                </h1>
                                <p className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest pt-2">
                                    Select one or more services
                                </p>
                                {data.services.length > 0 && (
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/40 bg-amber-500/10 mt-2">
                                        <Check size={11} className="text-amber-400" strokeWidth={3} />
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-400">
                                            {data.services.length} selected
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                                {visibleServices.map((opt) => {
                                    const isSelected = data.services.includes(opt.id);
                                    return (
                                        <button
                                            key={opt.id}
                                            type="button"
                                            onClick={() => toggleService(opt.id)}
                                            className={cn(
                                                "group relative p-8 rounded-[2.5rem] border transition-all duration-500 text-left pointer-events-auto z-30 block w-full overflow-hidden",
                                                isSelected
                                                    ? "bg-amber-500/15 border-amber-500/60 shadow-[0_10px_30px_rgba(245,158,11,0.2)]"
                                                    : "border-white/10 bg-white/5 hover:bg-amber-500/10 hover:border-amber-500/40"
                                            )}
                                        >
                                            <div className={cn(
                                                "absolute -top-12 -right-12 w-32 h-32 blur-3xl rounded-full transition-all duration-700",
                                                isSelected ? "bg-amber-500/20" : "bg-amber-500/0 group-hover:bg-amber-500/15"
                                            )} />

                                            {isSelected && (
                                                <div className="absolute top-4 right-4 h-7 w-7 rounded-full bg-amber-500 text-black flex items-center justify-center shadow-lg z-10">
                                                    <Check size={14} strokeWidth={4} />
                                                </div>
                                            )}

                                            <div className="relative">
                                                <div className={cn(
                                                    "mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl border transition-all pointer-events-none",
                                                    isSelected
                                                        ? "bg-amber-500 border-amber-500 text-black scale-110"
                                                        : "bg-amber-500/10 border-amber-500/20 text-amber-400 group-hover:bg-amber-500 group-hover:text-black group-hover:scale-110"
                                                )}>
                                                    {opt.icon}
                                                </div>
                                                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter italic leading-none text-white pointer-events-none">
                                                    {opt.id}
                                                </h3>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* boton para mostrar mas servicios */}
                            {!showMoreServices && (
                                <button
                                    type="button"
                                    onClick={() => setShowMoreServices(true)}
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 bg-white/5 text-[10px] font-black text-zinc-300 hover:text-white hover:bg-amber-500/10 hover:border-amber-500/40 uppercase tracking-[0.3em] transition-all relative z-30"
                                >
                                    <Plus size={14} />
                                    More Services
                                </button>
                            )}

                            <button
                                disabled={data.services.length === 0}
                                type="button"
                                onClick={() => setStep(2)}
                                className="w-full max-w-md py-7 bg-white text-black font-black uppercase tracking-[0.4em] rounded-full disabled:opacity-20 transition-all hover:bg-amber-500 hover:scale-[1.02] active:scale-95 relative z-30 text-xs"
                            >
                                Continue <ChevronRight className="inline ml-1" size={18} />
                            </button>
                        </div>
                    )}

                    {/* PASO 2 - CLIENTE */}
                    {step === 2 && (
                        <div className="w-full space-y-12 animate-in fade-in slide-in-from-right-10 duration-700 max-w-2xl flex flex-col items-center text-center">
                            <div className="space-y-4">
                                <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 text-[10px] font-black text-zinc-300 hover:text-white hover:bg-white/10 uppercase tracking-[0.3em] mx-auto transition-all relative z-30"
                                >
                                    <ArrowLeft size={12} /> Back
                                </button>
                                <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none italic text-white">
                                    Client.
                                </h2>
                            </div>

                            <div className="w-full space-y-4 relative z-30">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="relative w-full bg-white/5 rounded-3xl border border-white/15 focus-within:border-amber-500/50 focus-within:bg-amber-500/5 transition-all">
                                        <User className="absolute left-6 top-1/2 -translate-y-1/2 text-amber-400 pointer-events-none" size={20} />
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            autoComplete="given-name"
                                            value={data.firstName}
                                            onChange={(e) => setData({ ...data, firstName: e.target.value })}
                                            className="w-full bg-transparent py-6 pl-14 pr-6 text-base font-bold italic outline-none text-white placeholder:text-zinc-500 relative z-30"
                                        />
                                    </div>
                                    <div className="relative w-full bg-white/5 rounded-3xl border border-white/15 focus-within:border-amber-500/50 focus-within:bg-amber-500/5 transition-all">
                                        <User className="absolute left-6 top-1/2 -translate-y-1/2 text-amber-400 pointer-events-none" size={20} />
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            autoComplete="family-name"
                                            value={data.lastName}
                                            onChange={(e) => setData({ ...data, lastName: e.target.value })}
                                            className="w-full bg-transparent py-6 pl-14 pr-6 text-base font-bold italic outline-none text-white placeholder:text-zinc-500 relative z-30"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3 pt-2">
                                    {["Residential", "Commercial"].map((p) => (
                                        <button
                                            key={p}
                                            type="button"
                                            onClick={() => setData({ ...data, propertyType: p as "Residential" | "Commercial", areas: [] })}
                                            className={cn(
                                                "py-5 rounded-2xl border transition-all text-sm font-black uppercase tracking-tight italic flex items-center justify-center gap-3 relative z-30",
                                                data.propertyType === p
                                                    ? "bg-amber-500 text-black border-amber-500 shadow-[0_10px_30px_rgba(245,158,11,0.3)]"
                                                    : "border-white/15 bg-white/5 text-zinc-300 hover:border-white/30 hover:bg-white/10"
                                            )}
                                        >
                                            {p === "Residential"
                                                ? <Home size={18} className="pointer-events-none" />
                                                : <Building size={18} className="pointer-events-none" />}
                                            <span className="pointer-events-none">{p}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button
                                disabled={!data.firstName || !data.lastName}
                                type="button"
                                onClick={() => setStep(3)}
                                className="w-full py-7 bg-white text-black font-black uppercase tracking-[0.4em] rounded-full disabled:opacity-20 transition-all hover:bg-amber-500 hover:scale-[1.02] active:scale-95 relative z-30 text-xs"
                            >
                                Continue <ChevronRight className="inline ml-1" size={18} />
                            </button>
                        </div>
                    )}

                    {/* PASO 3 - AREAS */}
                    {step === 3 && (
                        <div className="w-full space-y-12 animate-in fade-in slide-in-from-right-10 duration-700 flex flex-col items-center text-center">
                            <div className="space-y-4">
                                <button
                                    type="button"
                                    onClick={() => setStep(2)}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 text-[10px] font-black text-zinc-300 hover:text-white hover:bg-white/10 uppercase tracking-[0.3em] mx-auto transition-all relative z-30"
                                >
                                    <ArrowLeft size={12} /> Back
                                </button>
                                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none italic text-amber-400">
                                    Target Areas.
                                </h2>
                                <p className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest">
                                    Based on your selected services — pick one or more areas
                                </p>

                                <div className="flex flex-wrap justify-center gap-2 pt-2 max-w-2xl mx-auto">
                                    {data.services.map(s => (
                                        <span
                                            key={s}
                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/5 text-[9px] font-bold uppercase tracking-widest text-amber-300"
                                        >
                                            <Check size={10} strokeWidth={3} />
                                            {s}
                                        </span>
                                    ))}
                                </div>

                                {data.areas.length > 0 && (
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 mt-2">
                                        <Check size={11} className="text-amber-400" strokeWidth={3} />
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-200">
                                            {data.areas.length} area{data.areas.length > 1 ? "s" : ""} selected
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full">
                                {combinedAreas.map((item) => {
                                    const isSelected = data.areas.includes(item.id);
                                    return (
                                        <button
                                            key={item.id}
                                            type="button"
                                            onClick={() => toggleArea(item.id)}
                                            className={cn(
                                                "relative p-6 rounded-3xl border transition-all duration-300 text-[11px] font-black uppercase tracking-tight italic flex flex-col items-center justify-center gap-4 z-30 w-full overflow-hidden",
                                                isSelected
                                                    ? "bg-amber-500/15 border-amber-500/60 text-white shadow-[0_8px_20px_rgba(245,158,11,0.2)]"
                                                    : "border-white/15 bg-white/5 text-zinc-200 hover:border-amber-500/50 hover:bg-amber-500/5"
                                            )}
                                        >
                                            {isSelected && (
                                                <div className="absolute top-3 right-3 h-6 w-6 rounded-full bg-amber-500 text-black flex items-center justify-center shadow-lg z-10">
                                                    <Check size={12} strokeWidth={4} />
                                                </div>
                                            )}
                                            <div className={cn(
                                                "h-12 w-12 rounded-2xl flex items-center justify-center pointer-events-none transition-all",
                                                isSelected
                                                    ? "bg-amber-500 text-black scale-110"
                                                    : "bg-amber-500/10 text-amber-400"
                                            )}>
                                                {item.icon}
                                            </div>
                                            <span className="pointer-events-none">{item.id}</span>
                                        </button>
                                    );
                                })}
                            </div>

                            <button
                                disabled={data.areas.length === 0}
                                type="button"
                                onClick={() => setStep(4)}
                                className="w-full max-w-md py-7 bg-white text-black font-black uppercase tracking-[0.4em] rounded-full disabled:opacity-20 transition-all hover:bg-amber-500 hover:scale-[1.02] active:scale-95 relative z-30 text-xs"
                            >
                                Continue <ChevronRight className="inline ml-1" size={18} />
                            </button>
                        </div>
                    )}

                    {/* PASO 4 - UBICACION */}
                    {step === 4 && (
                        <div className="w-full space-y-12 animate-in fade-in slide-in-from-right-10 duration-700 max-w-2xl flex flex-col items-center text-center">
                            <div className="space-y-4">
                                <button
                                    type="button"
                                    onClick={() => setStep(3)}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 text-[10px] font-black text-zinc-300 hover:text-white hover:bg-white/10 uppercase tracking-[0.3em] mx-auto transition-all relative z-30"
                                >
                                    <ArrowLeft size={12} /> Back
                                </button>
                                <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none italic text-white">
                                    Location.
                                </h2>
                            </div>

                            <div className="w-full space-y-3 relative z-30">
                                <div className="relative w-full bg-white/5 rounded-3xl border border-white/15 focus-within:border-amber-500/50 focus-within:bg-amber-500/5 transition-all">
                                    <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-amber-400 pointer-events-none" size={20} />
                                    <input
                                        type="text"
                                        placeholder="Street Address (e.g. 730 Paul Ct)"
                                        autoComplete="street-address"
                                        value={data.street}
                                        onChange={(e) => setData({ ...data, street: e.target.value })}
                                        className="w-full bg-transparent py-6 pl-14 pr-6 text-base font-bold italic outline-none text-white placeholder:text-zinc-500 relative z-30"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="relative w-full bg-white/5 rounded-3xl border border-white/15 focus-within:border-amber-500/50 focus-within:bg-amber-500/5 transition-all">
                                        <Building className="absolute left-6 top-1/2 -translate-y-1/2 text-amber-400 pointer-events-none" size={20} />
                                        <input
                                            type="text"
                                            placeholder="City (e.g. Perris)"
                                            autoComplete="address-level2"
                                            value={data.city}
                                            onChange={(e) => setData({ ...data, city: e.target.value })}
                                            className="w-full bg-transparent py-6 pl-14 pr-6 text-base font-bold italic outline-none text-white placeholder:text-zinc-500 relative z-30"
                                        />
                                    </div>
                                    <div className="relative w-full bg-white/5 rounded-3xl border border-white/15 focus-within:border-amber-500/50 focus-within:bg-amber-500/5 transition-all">
                                        <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-amber-400 pointer-events-none" size={20} />
                                        <input
                                            type="text"
                                            placeholder="State (e.g. CA)"
                                            autoComplete="address-level1"
                                            maxLength={2}
                                            value={data.state}
                                            onChange={(e) => setData({ ...data, state: e.target.value.toUpperCase() })}
                                            className="w-full bg-transparent py-6 pl-14 pr-6 text-base font-bold italic outline-none text-white placeholder:text-zinc-500 uppercase relative z-30"
                                        />
                                    </div>
                                </div>

                                <div className="relative w-full max-w-xs mx-auto bg-white/5 rounded-3xl border border-white/15 focus-within:border-amber-500/50 focus-within:bg-amber-500/5 transition-all">
                                    <Hash className="absolute left-6 top-1/2 -translate-y-1/2 text-amber-400 pointer-events-none" size={20} />
                                    <input
                                        type="text"
                                        inputMode="numeric"
                                        pattern="[0-9]*"
                                        maxLength={5}
                                        placeholder="Zip Code (e.g. 92570)"
                                        autoComplete="postal-code"
                                        value={data.zip}
                                        onChange={(e) => setData({ ...data, zip: e.target.value.replace(/\D/g, "") })}
                                        className="w-full bg-transparent py-6 pl-14 pr-6 text-base font-bold italic outline-none text-white placeholder:text-zinc-500 text-center relative z-30"
                                    />
                                </div>

                                <div className="space-y-3 text-left pt-6">
                                    <p className="text-[10px] font-black text-zinc-300 uppercase tracking-widest ml-2">
                                        Timeline
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                        {TIMELINES.map((t) => (
                                            <button
                                                key={t.id}
                                                type="button"
                                                onClick={() => setData({ ...data, timeline: t.id })}
                                                className={cn(
                                                    "py-4 px-3 rounded-2xl border text-[10px] font-black uppercase tracking-tight transition-all relative z-30 flex items-center justify-center gap-2",
                                                    data.timeline === t.id
                                                        ? "bg-amber-500 text-black border-amber-500 shadow-[0_8px_20px_rgba(245,158,11,0.3)]"
                                                        : "border-white/15 bg-white/5 text-zinc-200 hover:border-white/30 hover:bg-white/10"
                                                )}
                                            >
                                                <Clock className="pointer-events-none" size={12} />
                                                <span className="pointer-events-none">{t.id}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <button
                                disabled={!data.street || !data.city || !data.state || !data.zip}
                                type="button"
                                onClick={() => setStep(5)}
                                className="w-full py-7 bg-white text-black font-black uppercase tracking-[0.4em] rounded-full disabled:opacity-20 transition-all hover:bg-amber-500 hover:scale-[1.02] active:scale-95 relative z-30 text-xs"
                            >
                                Preview Application <ChevronRight className="inline ml-1" size={18} />
                            </button>
                        </div>
                    )}

                    {/* PASO 5 - REVISION */}
                    {step === 5 && (
                        <div className="w-full max-w-5xl animate-in zoom-in fade-in duration-700 relative z-30">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                                <div className="bg-white/5 border border-white/15 rounded-[2.5rem] p-10 space-y-8 relative overflow-hidden">
                                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />

                                    <div className="relative flex items-center justify-between text-amber-400">
                                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10">
                                            <LayoutIcon size={14} />
                                            <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                                                Project Blueprint
                                            </span>
                                        </div>
                                        <span className="text-[9px] font-mono text-zinc-400 italic">
                                            ID-{projectId}
                                        </span>
                                    </div>

                                    <div className="relative space-y-7">
                                        <div className="grid grid-cols-2 gap-6">
                                            <div>
                                                <p className="text-[9px] text-zinc-400 uppercase font-black tracking-[0.3em] mb-2">
                                                    Owner
                                                </p>
                                                <p className="text-xl font-black italic uppercase leading-none text-white">
                                                    {fullName}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-[9px] text-zinc-400 uppercase font-black tracking-[0.3em] mb-2">
                                                    Category
                                                </p>
                                                <p className="text-xl font-black italic uppercase leading-none text-amber-400">
                                                    {data.propertyType}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="pt-6 border-t border-white/10">
                                            <p className="text-[9px] text-zinc-400 uppercase font-black tracking-[0.3em] mb-2">
                                                Sending via
                                            </p>
                                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10">
                                                {data.contactMethod === "email"
                                                    ? <Mail size={12} className="text-amber-400" />
                                                    : <Phone size={12} className="text-amber-400" />}
                                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-300">
                                                    {data.contactMethod === "email" ? "Email" : "Text Message"}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="pt-6 border-t border-white/10">
                                            <p className="text-[9px] text-zinc-400 uppercase font-black tracking-[0.3em] mb-3">
                                                Services ({data.services.length})
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {data.services.map((s, i) => (
                                                    <span
                                                        key={i}
                                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 text-[10px] font-bold uppercase tracking-tight text-amber-300"
                                                    >
                                                        <Check size={10} strokeWidth={3} />
                                                        {s}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="pt-6 border-t border-white/10">
                                            <p className="text-[9px] text-zinc-400 uppercase font-black tracking-[0.3em] mb-3">
                                                Target Areas ({data.areas.length})
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {data.areas.map((a, i) => (
                                                    <span
                                                        key={i}
                                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 text-[10px] font-bold uppercase tracking-tight text-white"
                                                    >
                                                        <Check size={10} strokeWidth={3} />
                                                        {a}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="pt-6 border-t border-white/10 space-y-4">
                                            <p className="text-[9px] text-zinc-400 uppercase font-black tracking-[0.3em]">
                                                Site Address
                                            </p>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <p className="text-[8px] text-zinc-500 uppercase font-black tracking-widest mb-1">Street</p>
                                                    <p className="text-sm font-bold italic text-zinc-200">{data.street}</p>
                                                </div>
                                                <div>
                                                    <p className="text-[8px] text-zinc-500 uppercase font-black tracking-widest mb-1">City</p>
                                                    <p className="text-sm font-bold italic text-zinc-200">{data.city}</p>
                                                </div>
                                                <div>
                                                    <p className="text-[8px] text-zinc-500 uppercase font-black tracking-widest mb-1">State</p>
                                                    <p className="text-sm font-bold italic text-zinc-200">{data.state}</p>
                                                </div>
                                                <div>
                                                    <p className="text-[8px] text-zinc-500 uppercase font-black tracking-widest mb-1">Zip</p>
                                                    <p className="text-sm font-bold italic text-zinc-200">{data.zip}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-6 border-t border-white/10">
                                            <p className="text-[9px] text-zinc-400 uppercase font-black tracking-[0.3em] mb-2">
                                                Timeline
                                            </p>
                                            <p className="text-sm font-bold italic text-amber-400">
                                                {data.timeline}
                                            </p>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => { setStep(0); setData({ ...data, userEditedMessage: "" }); }}
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 text-[9px] font-black uppercase tracking-[0.3em] text-zinc-300 hover:text-white hover:bg-white/10 transition-all relative z-30"
                                        >
                                            Start New Draft
                                        </button>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6 w-full relative z-30">
                                    <div className="flex items-center justify-between px-2">
                                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5">
                                            {data.contactMethod === "email"
                                                ? <Mail size={12} className="text-amber-400" />
                                                : <MessageSquare size={12} className="text-amber-400" />}
                                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-200">
                                                {data.contactMethod === "email" ? "Email Preview" : "Message Preview"}
                                            </span>
                                        </div>
                                    </div>

                                    <textarea
                                        value={finalMessage}
                                        onChange={(e) => setData({ ...data, userEditedMessage: e.target.value })}
                                        className="w-full min-h-75 bg-white/5 border border-white/15 rounded-[2.5rem] p-8 text-base md:text-lg font-medium leading-relaxed italic text-zinc-200 outline-none focus:border-amber-500/50 focus:bg-amber-500/5 transition-all resize-none relative z-30"
                                    />

                                    <a
                                        href={submitLink}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleSubmit();
                                        }}
                                        className="flex items-center justify-center gap-4 bg-amber-500 text-black py-10 rounded-[2.5rem] font-black uppercase tracking-[0.4em] hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(245,158,11,0.4)] transition-all active:scale-95 group w-full relative z-30 cursor-pointer no-underline text-sm"
                                    >
                                        {data.contactMethod === "email" ? "Send Email" : "Send Message"}
                                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </a>
                                </div>

                            </div>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}