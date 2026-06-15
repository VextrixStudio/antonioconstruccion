"use client";

import { useState } from "react";
import {
    Hammer, MessageSquare, Construction, Paintbrush,
    ChevronRight, MapPin, Check, ArrowLeft,
    Send, Layout as LayoutIcon, User, Building, Clock,
    Utensils, Briefcase, Store, Home, Bath, Sofa, Bed,
    Trees, Layers, DoorOpen, Warehouse, PenTool,
    Hash, Triangle
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const AREAS = {
    Residential: [
        { id: "Kitchen", icon: <Utensils size={20} /> },
        { id: "Bathroom", icon: <Bath size={20} /> },
        { id: "Living Room", icon: <Sofa size={20} /> },
        { id: "Bedroom", icon: <Bed size={20} /> },
        { id: "Full House", icon: <Home size={20} /> },
        { id: "Exterior/Backyard", icon: <Trees size={20} /> },
        { id: "Roofing", icon: <Triangle size={20} /> },
        { id: "Flooring", icon: <Layers size={20} /> }
    ],
    Commercial: [
        { id: "Office Space", icon: <Briefcase size={20} /> },
        { id: "Restaurant/Bar", icon: <Utensils size={20} /> },
        { id: "Retail/Storefront", icon: <Store size={20} /> },
        { id: "Lobby/Reception", icon: <DoorOpen size={20} /> },
        { id: "Warehouse", icon: <Warehouse size={20} /> },
        { id: "Commercial Kitchen", icon: <Utensils size={20} /> },
        { id: "Exterior/Signage", icon: <PenTool size={20} /> },
        { id: "Full Renovation", icon: <Construction size={20} /> }
    ]
};

// Timeline options with a human-readable phrase for the SMS body
const TIMELINES = [
    { id: "Ready to start", phrase: "as soon as possible" },
    { id: "In 1-3 Months", phrase: "within the next 1 to 3 months" },
    { id: "Just Planning", phrase: "soon — we're still in the planning phase" }
];

export default function ConstructionEstimate() {
    const [step, setStep] = useState(1);
    const [projectId] = useState(() => Math.floor(Math.random() * 10000));
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        type: "",
        propertyType: "Residential" as "Residential" | "Commercial",
        area: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        timeline: "Ready to start",
        userEditedMessage: ""
    });

    const fullName = `${data.firstName} ${data.lastName}`.trim();
    const fullAddress = [data.street, data.city, data.state, data.zip].filter(Boolean).join(", ");

    // Get the natural phrase for the chosen timeline
    const timelinePhrase = TIMELINES.find(t => t.id === data.timeline)?.phrase || "as soon as possible";

    // Properly-worded default message
    const defaultMessage =
        `Hi Antonio, my name is ${fullName || "[Your Name]"}. ` +
        `I'd like to request a quote for a ${data.propertyType.toLowerCase()} ${data.type.toLowerCase()} project ` +
        `on my ${data.area || "space"}, located at ${fullAddress || "[address]"}. ` +
        `I'm hoping to get started ${timelinePhrase}. ` +
        `Please get back to me when you have a chance. Thank you!`;

    const finalMessage = data.userEditedMessage || defaultMessage;

    // Phone-friendly SMS link.
    // Using "?&body=" works across both iOS and Android.
    const phoneNumber = "+13237408161";
    const encodedBody = encodeURIComponent(finalMessage);
    const smsLink = `sms:${phoneNumber}?&body=${encodedBody}`;

    // Handler that opens SMS in a way that works on real phones
    const handleSubmit = () => {
        // On mobile, location.href triggers the native SMS app reliably.
        // window.open with "_blank" often gets blocked by mobile browsers.
        if (typeof window !== "undefined") {
            window.location.href = smsLink;
        }
    };

    return (
        <section className="relative z-10 flex flex-col items-center justify-start min-h-[85vh] px-6 py-12 select-none">
            <div className="w-full max-w-5xl flex flex-col items-center relative z-20">

                {/* Progress Bar */}
                <div className="relative flex items-center justify-between w-full max-w-md mb-20 mx-auto z-30">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="z-10 flex items-center justify-center">
                            <div className={cn(
                                "h-10 w-10 rounded-full flex items-center justify-center border transition-all duration-700 bg-zinc-950 text-[10px] font-black",
                                step >= i
                                    ? "border-amber-500 bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.5)]"
                                    : "border-white/10 text-zinc-700"
                            )}>
                                {step > i ? <Check size={16} strokeWidth={4} /> : i}
                            </div>
                        </div>
                    ))}
                    <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0" />
                </div>

                {/* Steps Content */}
                <div className="w-full flex flex-col items-center relative z-20">

                    {/* STEP 1 */}
                    {step === 1 && (
                        <div className="w-full space-y-12 animate-in fade-in zoom-in duration-700 flex flex-col items-center text-center">
                            <div className="space-y-4">
                                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-500">Step 01</span>
                                <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none italic">Service.</h1>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                                {[
                                    { id: "Construction", icon: <Construction size={40} /> },
                                    { id: "Remodeling", icon: <Hammer size={40} /> },
                                    { id: "Refinishing", icon: <Paintbrush size={40} /> }
                                ].map((opt) => (
                                    <button
                                        key={opt.id}
                                        type="button"
                                        onClick={() => { setData({ ...data, type: opt.id }); setStep(2); }}
                                        className="group p-10 rounded-[3rem] border border-white/10 bg-white/5 hover:bg-amber-500/10 hover:border-amber-500/50 transition-all text-left pointer-events-auto relative z-30 block w-full"
                                    >
                                        <div className="mb-8 text-zinc-500 group-hover:text-amber-500 transition-all group-hover:scale-110 pointer-events-none">{opt.icon}</div>
                                        <h3 className="text-3xl font-black uppercase tracking-tighter italic leading-none pointer-events-none">{opt.id}</h3>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* STEP 2 - Client */}
                    {step === 2 && (
                        <div className="w-full space-y-12 animate-in fade-in slide-in-from-right-10 duration-700 max-w-2xl flex flex-col items-center text-center">
                            <div className="space-y-4">
                                <button type="button" onClick={() => setStep(1)} className="text-[10px] font-black text-zinc-500 hover:text-white uppercase tracking-[0.3em] flex items-center gap-2 mx-auto transition-all relative z-30">
                                    <ArrowLeft size={12} /> Back
                                </button>
                                <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none italic">Client.</h2>
                            </div>

                            <div className="w-full space-y-6 relative z-30">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="relative w-full p-1 bg-white/5 rounded-[2.5rem] border border-white/10 focus-within:border-amber-500/50 transition-all">
                                        <User className="absolute left-7 top-1/2 -translate-y-1/2 text-amber-500 pointer-events-none" size={22} />
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            autoComplete="given-name"
                                            value={data.firstName}
                                            onChange={(e) => setData({ ...data, firstName: e.target.value })}
                                            className="w-full bg-transparent py-7 pl-16 pr-6 text-lg font-bold italic outline-none text-white placeholder:text-zinc-800 relative z-30"
                                        />
                                    </div>
                                    <div className="relative w-full p-1 bg-white/5 rounded-[2.5rem] border border-white/10 focus-within:border-amber-500/50 transition-all">
                                        <User className="absolute left-7 top-1/2 -translate-y-1/2 text-amber-500 pointer-events-none" size={22} />
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            autoComplete="family-name"
                                            value={data.lastName}
                                            onChange={(e) => setData({ ...data, lastName: e.target.value })}
                                            className="w-full bg-transparent py-7 pl-16 pr-6 text-lg font-bold italic outline-none text-white placeholder:text-zinc-800 relative z-30"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    {["Residential", "Commercial"].map((p) => (
                                        <button
                                            key={p}
                                            type="button"
                                            onClick={() => setData({ ...data, propertyType: p as "Residential" | "Commercial" })}
                                            className={cn(
                                                "py-6 rounded-2xl border transition-all text-sm font-black uppercase tracking-tighter italic flex items-center justify-center gap-3 relative z-30",
                                                data.propertyType === p
                                                    ? "bg-amber-500 text-black border-amber-500"
                                                    : "border-white/10 bg-white/5 text-zinc-500"
                                            )}
                                        >
                                            {p === "Residential" ? <Home size={18} className="pointer-events-none" /> : <Building size={18} className="pointer-events-none" />}
                                            <span className="pointer-events-none">{p}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button
                                disabled={!data.firstName || !data.lastName}
                                type="button"
                                onClick={() => setStep(3)}
                                className="w-full py-8 bg-white text-black font-black uppercase tracking-[0.5em] rounded-full disabled:opacity-20 transition-all hover:bg-amber-500 relative z-30"
                            >
                                Continue <ChevronRight className="inline ml-1" size={20} />
                            </button>
                        </div>
                    )}

                    {/* STEP 3 - Area */}
                    {step === 3 && (
                        <div className="w-full space-y-12 animate-in fade-in slide-in-from-right-10 duration-700 flex flex-col items-center text-center">
                            <div className="space-y-4">
                                <button type="button" onClick={() => setStep(2)} className="text-[10px] font-black text-zinc-500 hover:text-white uppercase tracking-[0.3em] flex items-center gap-2 mx-auto transition-all relative z-30">
                                    <ArrowLeft size={12} /> Back
                                </button>
                                <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none italic text-amber-500">{data.propertyType} Area.</h2>
                                <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Select the specific part of the {data.propertyType.toLowerCase()} project</p>
                            </div>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                                {AREAS[data.propertyType].map((item) => (
                                    <button
                                        key={item.id}
                                        type="button"
                                        onClick={() => { setData({ ...data, area: item.id }); setStep(4); }}
                                        className={cn(
                                            "p-8 rounded-3xl border transition-all text-[11px] font-black uppercase tracking-tighter italic flex flex-col items-center justify-center gap-3 relative z-30 w-full",
                                            data.area === item.id
                                                ? "bg-white text-black border-white"
                                                : "border-white/10 bg-white/5 text-zinc-500 hover:border-white/20"
                                        )}
                                    >
                                        <div className={cn("pointer-events-none", data.area === item.id ? "text-black" : "text-amber-500/50")}>{item.icon}</div>
                                        <span className="pointer-events-none">{item.id}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* STEP 4 - Location */}
                    {step === 4 && (
                        <div className="w-full space-y-12 animate-in fade-in slide-in-from-right-10 duration-700 max-w-2xl flex flex-col items-center text-center">
                            <div className="space-y-4">
                                <button type="button" onClick={() => setStep(3)} className="text-[10px] font-black text-zinc-500 hover:text-white uppercase tracking-[0.3em] flex items-center gap-2 mx-auto transition-all relative z-30">
                                    <ArrowLeft size={12} /> Back
                                </button>
                                <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none italic">Location.</h2>
                            </div>

                            <div className="w-full space-y-4 relative z-30">
                                <div className="relative w-full p-1 bg-white/5 rounded-[2.5rem] border border-white/10 focus-within:border-amber-500/50 transition-all">
                                    <MapPin className="absolute left-7 top-1/2 -translate-y-1/2 text-amber-500 pointer-events-none" size={22} />
                                    <input
                                        type="text"
                                        placeholder="Street Address (e.g. 730 Paul Ct)"
                                        autoComplete="street-address"
                                        value={data.street}
                                        onChange={(e) => setData({ ...data, street: e.target.value })}
                                        className="w-full bg-transparent py-7 pl-16 pr-6 text-lg font-bold italic outline-none text-white placeholder:text-zinc-800 relative z-30"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="relative w-full p-1 bg-white/5 rounded-[2.5rem] border border-white/10 focus-within:border-amber-500/50 transition-all">
                                        <Building className="absolute left-7 top-1/2 -translate-y-1/2 text-amber-500 pointer-events-none" size={22} />
                                        <input
                                            type="text"
                                            placeholder="City (e.g. Perris)"
                                            autoComplete="address-level2"
                                            value={data.city}
                                            onChange={(e) => setData({ ...data, city: e.target.value })}
                                            className="w-full bg-transparent py-7 pl-16 pr-6 text-lg font-bold italic outline-none text-white placeholder:text-zinc-800 relative z-30"
                                        />
                                    </div>
                                    <div className="relative w-full p-1 bg-white/5 rounded-[2.5rem] border border-white/10 focus-within:border-amber-500/50 transition-all">
                                        <MapPin className="absolute left-7 top-1/2 -translate-y-1/2 text-amber-500 pointer-events-none" size={22} />
                                        <input
                                            type="text"
                                            placeholder="State (e.g. CA)"
                                            autoComplete="address-level1"
                                            maxLength={2}
                                            value={data.state}
                                            onChange={(e) => setData({ ...data, state: e.target.value.toUpperCase() })}
                                            className="w-full bg-transparent py-7 pl-16 pr-6 text-lg font-bold italic outline-none text-white placeholder:text-zinc-800 uppercase relative z-30"
                                        />
                                    </div>
                                </div>

                                <div className="relative w-full max-w-xs mx-auto p-1 bg-white/5 rounded-[2.5rem] border border-white/10 focus-within:border-amber-500/50 transition-all">
                                    <Hash className="absolute left-7 top-1/2 -translate-y-1/2 text-amber-500 pointer-events-none" size={22} />
                                    <input
                                        type="text"
                                        inputMode="numeric"
                                        pattern="[0-9]*"
                                        maxLength={5}
                                        placeholder="Zip Code (e.g. 92570)"
                                        autoComplete="postal-code"
                                        value={data.zip}
                                        onChange={(e) => setData({ ...data, zip: e.target.value.replace(/\D/g, "") })}
                                        className="w-full bg-transparent py-7 pl-16 pr-6 text-lg font-bold italic outline-none text-white placeholder:text-zinc-800 text-center relative z-30"
                                    />
                                </div>

                                <div className="space-y-4 text-left pt-4">
                                    <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest ml-4">Timeline</p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                        {TIMELINES.map((t) => (
                                            <button
                                                key={t.id}
                                                type="button"
                                                onClick={() => setData({ ...data, timeline: t.id })}
                                                className={cn(
                                                    "py-4 rounded-xl border text-[10px] font-black uppercase tracking-tighter transition-all relative z-30",
                                                    data.timeline === t.id
                                                        ? "bg-amber-500 text-black border-amber-500"
                                                        : "border-white/5 bg-white/5 text-zinc-500"
                                                )}
                                            >
                                                <Clock className="inline mr-2 pointer-events-none" size={12} /> <span className="pointer-events-none">{t.id}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <button
                                disabled={!data.street || !data.city || !data.state || !data.zip}
                                type="button"
                                onClick={() => setStep(5)}
                                className="w-full py-8 bg-white text-black font-black uppercase tracking-[0.5em] rounded-full disabled:opacity-20 transition-all hover:bg-amber-500 relative z-30"
                            >
                                Preview Application <ChevronRight className="inline ml-1" size={20} />
                            </button>
                        </div>
                    )}

                    {/* STEP 5 - Review */}
                    {step === 5 && (
                        <div className="w-full max-w-5xl animate-in zoom-in fade-in duration-700 relative z-30">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                                <div className="bg-zinc-950/40 border border-white/10 rounded-[3.5rem] p-10 md:p-14 space-y-8 relative overflow-hidden">
                                    <div className="flex items-center justify-between text-amber-500">
                                        <div className="flex items-center gap-3">
                                            <LayoutIcon size={18} />
                                            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Project Blueprint</span>
                                        </div>
                                        <span className="text-[8px] font-mono text-zinc-700 italic">ID-{projectId}</span>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="grid grid-cols-2 gap-8">
                                            <div>
                                                <p className="text-[8px] text-zinc-600 uppercase font-black tracking-[0.3em] mb-2">Owner</p>
                                                <p className="text-xl font-black italic uppercase leading-none">{fullName}</p>
                                            </div>
                                            <div>
                                                <p className="text-[8px] text-zinc-600 uppercase font-black tracking-[0.3em] mb-2">Category</p>
                                                <p className="text-xl font-black italic uppercase leading-none text-amber-500">{data.propertyType}</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/5">
                                            <div>
                                                <p className="text-[8px] text-zinc-600 uppercase font-black tracking-[0.3em] mb-2">Type</p>
                                                <p className="text-xl font-black italic uppercase leading-none">{data.type}</p>
                                            </div>
                                            <div>
                                                <p className="text-[8px] text-zinc-600 uppercase font-black tracking-[0.3em] mb-2">Target</p>
                                                <p className="text-xl font-black italic uppercase leading-none">{data.area}</p>
                                            </div>
                                        </div>
                                        <div className="pt-6 border-t border-white/5 space-y-4">
                                            <p className="text-[8px] text-zinc-600 uppercase font-black tracking-[0.3em] mb-2">Site Address</p>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <p className="text-[7px] text-zinc-700 uppercase font-black tracking-widest mb-1">Street</p>
                                                    <p className="text-sm font-bold italic text-zinc-400">{data.street}</p>
                                                </div>
                                                <div>
                                                    <p className="text-[7px] text-zinc-700 uppercase font-black tracking-widest mb-1">City</p>
                                                    <p className="text-sm font-bold italic text-zinc-400">{data.city}</p>
                                                </div>
                                                <div>
                                                    <p className="text-[7px] text-zinc-700 uppercase font-black tracking-widest mb-1">State</p>
                                                    <p className="text-sm font-bold italic text-zinc-400">{data.state}</p>
                                                </div>
                                                <div>
                                                    <p className="text-[7px] text-zinc-700 uppercase font-black tracking-widest mb-1">Zip</p>
                                                    <p className="text-sm font-bold italic text-zinc-400">{data.zip}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-6 border-t border-white/5">
                                            <p className="text-[8px] text-zinc-600 uppercase font-black tracking-[0.3em] mb-2">Timeline</p>
                                            <p className="text-sm font-bold italic text-amber-500">{data.timeline}</p>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setStep(1)}
                                            className="text-[9px] font-black uppercase text-zinc-700 hover:text-white transition-all underline underline-offset-8 relative z-30"
                                        >
                                            Start New Draft
                                        </button>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6 w-full relative z-30">
                                    <div className="flex items-center justify-between px-6">
                                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 flex items-center gap-3">
                                            <MessageSquare size={14} /> Communication Preview
                                        </span>
                                    </div>

                                    <textarea
                                        value={finalMessage}
                                        onChange={(e) => setData({ ...data, userEditedMessage: e.target.value })}
                                        className="w-full min-h-75 bg-white/5 border border-white/10 rounded-[3rem] p-10 text-lg md:text-xl font-medium leading-relaxed italic text-zinc-300 outline-none focus:border-amber-500/50 transition-all resize-none shadow-inner relative z-30"
                                    />

                                    {/* Use <a href> as the primary trigger — most reliable on phones */}
                                    <a
                                        href={smsLink}
                                        onClick={(e) => {
                                            // Fallback for browsers that don't honor the anchor by default
                                            // (rare, but ensures it always opens the messaging app)
                                            e.preventDefault();
                                            handleSubmit();
                                        }}
                                        className="flex items-center justify-center gap-6 bg-amber-500 text-black py-12 rounded-[3rem] font-black uppercase tracking-[0.6em] hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(245,158,11,0.3)] transition-all active:scale-95 group w-full relative z-30 cursor-pointer no-underline"
                                    >
                                        Submit to Antonio <Send size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
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