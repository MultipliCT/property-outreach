import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const accent = 'text-[#1F7A8C]';
const accentBg = 'bg-[#1F7A8C]';

const navLinks = [
    { label: 'How it works', href: '#how-it-works' },
    { label: 'For HOAs', href: '#for-hoas' },
    { label: 'For Service Vendors', href: '#for-vendors' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
];

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Property Outreach | Connecting HOAs with reliable service vendors</title>
                <meta
                    name="description"
                    content="Property Outreach coordinates outreach between HOAs, property managers, and vetted service vendors for focused, well-timed meetings."
                />
            </Head>
            <div style={{ scrollBehavior: 'smooth' }} className="bg-white text-slate-900">
                <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
                    <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                        <Link href="#top" className="text-lg font-semibold tracking-tight text-slate-900">
                            Property Outreach
                        </Link>
                        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
                            {navLinks.map((link) => (
                                <a key={link.href} href={link.href} className="transition hover:text-slate-900">
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                        <a
                            href="#contact"
                            className={`hidden rounded-full px-4 py-2 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:shadow-md md:inline-flex ${accentBg}`}
                        >
                            Book an Intro Call
                        </a>
                        <button className="inline-flex items-center justify-center rounded-md border border-slate-200 p-2 md:hidden">
                            <span className="sr-only">Menu</span>
                            <svg className="h-5 w-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                            </svg>
                        </button>
                    </div>
                </header>

                <main id="top">
                    <section className="relative overflow-hidden bg-white">
                        <div className="absolute inset-x-0 -top-24 h-64 bg-gradient-to-b from-slate-50 to-transparent" aria-hidden />
                        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-20 pt-16 md:flex-row md:items-center md:pt-20">
                            <div className="w-full md:w-3/5">
                                <p className={`mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide ${accent}`}>
                                    HOA focused
                                    <span className="inline-block h-2 w-2 rounded-full bg-[#1F7A8C]" />
                                </p>
                                <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                                    Connecting HOAs with reliable service vendors.
                                </h1>
                                <p className="mt-6 max-w-2xl text-lg text-slate-600">
                                    Property Outreach coordinates outreach between property decision-makers and vetted service vendors. We help HOAs and property
                                    managers easily discover options when reviewing service contracts – starting with landscaping and snow removal.
                                </p>
                                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                    <a
                                        href="#contact"
                                        className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:shadow-lg ${accentBg}`}
                                    >
                                        Book an Intro Call
                                    </a>
                                    <a
                                        href="#how-it-works"
                                        className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-base font-semibold text-slate-800 transition duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                                    >
                                        See How It Works
                                        <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="relative w-full md:w-2/5">
                                <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                                    <div className="mb-6 flex items-center gap-3">
                                        <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-[#E8F3F1] text-2xl ${accent}`}>
                                            PO
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-700">Focused coordination</p>
                                            <p className="text-xs text-slate-500">Built for HOAs and local vendors</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4 text-sm text-slate-700">
                                        <div className="flex items-start gap-3">
                                            <span className={`mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white ${accentBg}`}>
                                                1
                                            </span>
                                            <p>Reach communities when they are reviewing contracts.</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className={`mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white ${accentBg}`}>
                                                2
                                            </span>
                                            <p>Match them with a vetted local vendor for one focused meeting.</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className={`mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white ${accentBg}`}>
                                                3
                                            </span>
                                            <p>Keep the process respectful—no spam, no pressure.</p>
                                        </div>
                                    </div>
                                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#E8F3F1] blur-3xl" aria-hidden />
                                    <div className="absolute -bottom-14 -left-6 h-32 w-32 rounded-full bg-[#E0ECFF] blur-3xl" aria-hidden />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="how-it-works" className="border-t border-slate-200 bg-slate-50 py-16">
                        <div className="mx-auto max-w-6xl px-6">
                            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                                <div>
                                    <h2 className="text-3xl font-semibold text-slate-900">How Property Outreach works</h2>
                                    <p className="mt-3 max-w-2xl text-slate-600">
                                        We are not a landscaping company. We coordinate the outreach between HOAs and local service vendors, so both sides save time and
                                        get better conversations.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-10 grid gap-6 md:grid-cols-3">
                                {[
                                    {
                                        title: 'We identify your timing',
                                        text: 'We reach out to HOAs and property managers to understand when they review or rebid key service contracts like landscaping and snow removal.'
                                    },
                                    {
                                        title: 'We match you with a local vendor',
                                        text: 'When a community is open to reviewing options, we coordinate a meeting with a vetted local service vendor in their area.'
                                    },
                                    {
                                        title: 'You have a focused meeting',
                                        text: 'The HOA or property manager gets one clear conversation with a potential vendor. No spam, no endless pitches – just a straightforward meeting when they are actually reviewing the contract.'
                                    }
                                ].map((step, index) => (
                                    <div key={step.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                        <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white ${accentBg}`}>
                                            {index + 1}
                                        </div>
                                        <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                                        <p className="mt-3 text-slate-600">{step.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="for-hoas" className="bg-white py-16">
                        <div className="mx-auto max-w-6xl px-6">
                            <div className="max-w-3xl">
                                <h2 className="text-3xl font-semibold text-slate-900">For HOAs and property managers</h2>
                                <p className="mt-3 text-slate-600">
                                    Our job is to make it easy for you to explore options when you are already planning to review a contract.
                                </p>
                            </div>
                            <div className="mt-10 grid gap-6 md:grid-cols-2">
                                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                                    <h3 className="text-xl font-semibold text-slate-900">What you get</h3>
                                    <ul className="mt-4 space-y-3 text-slate-700">
                                        {[
                                            'A simple way to meet at least one local vendor when you review a contract.',
                                            'No obligation to switch providers or sign anything on the spot.',
                                            'Vendors selected based on your location and service needs.'
                                        ].map((item) => (
                                            <li key={item} className="flex gap-3">
                                                <span className={`mt-1 inline-block h-2.5 w-2.5 rounded-full ${accentBg}`} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                                    <h3 className="text-xl font-semibold text-slate-900">How it feels to work with us</h3>
                                    <ul className="mt-4 space-y-3 text-slate-700">
                                        {[
                                            'No aggressive sales tactics – we are coordinators, not closers.',
                                            'We contact you with respect for your time and process.',
                                            'You stay fully in control of who you meet and when.'
                                        ].map((item) => (
                                            <li key={item} className="flex gap-3">
                                                <span className={`mt-1 inline-block h-2.5 w-2.5 rounded-full ${accentBg}`} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <p className="mt-6 max-w-3xl text-sm text-slate-600">
                                Today we focus primarily on landscaping and snow removal. Over time, we may add more services like waste collection, cleaning, pest
                                control, and general maintenance.
                            </p>
                        </div>
                    </section>

                    <section id="for-vendors" className="border-t border-slate-200 bg-slate-50 py-16">
                        <div className="mx-auto max-w-6xl px-6">
                            <div className="max-w-3xl">
                                <h2 className="text-3xl font-semibold text-slate-900">For service vendors</h2>
                                <p className="mt-3 text-slate-600">
                                    We help local service companies get in front of the people who actually decide on contracts.
                                </p>
                            </div>
                            <div className="mt-10 grid gap-8 md:grid-cols-2">
                                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                    <h3 className="text-lg font-semibold text-slate-900">Ideal vendors we work with</h3>
                                    <ul className="mt-4 space-y-3 text-slate-700">
                                        {[
                                            'Landscaping and snow removal companies serving HOA communities.',
                                            'Teams that can handle recurring contracts, not just one-off jobs.',
                                            'Owners and sales leaders who are willing to follow up fast on qualified meetings.'
                                        ].map((item) => (
                                            <li key={item} className="flex gap-3">
                                                <span className={`mt-1 inline-block h-2.5 w-2.5 rounded-full ${accentBg}`} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                    <h3 className="text-lg font-semibold text-slate-900">What you get with Property Outreach</h3>
                                    <ul className="mt-4 space-y-3 text-slate-700">
                                        {[
                                            'Qualified meetings with HOA boards or property managers in your target area.',
                                            'Conversations timed around their contract review window.',
                                            'Simple, transparent pay-per-meeting model on pilot campaigns.'
                                        ].map((item) => (
                                            <li key={item} className="flex gap-3">
                                                <span className={`mt-1 inline-block h-2.5 w-2.5 rounded-full ${accentBg}`} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="mt-4 text-sm text-slate-600">We are not a marketing agency. We focus specifically on outbound and booked meetings into HOAs.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="why" className="bg-white py-16">
                        <div className="mx-auto max-w-6xl px-6">
                            <div className="max-w-3xl">
                                <h2 className="text-3xl font-semibold text-slate-900">Why work with Property Outreach</h2>
                            </div>
                            <div className="mt-10 grid gap-6 md:grid-cols-2">
                                {[
                                    {
                                        title: 'Focused niche',
                                        text: 'We live in the world of HOAs, property managers, and service contracts. That focus lets us build better lists, better scripts, and better meetings.'
                                    },
                                    {
                                        title: 'Respect for both sides',
                                        text: 'We protect the time and reputation of both the HOA and the vendor. No spam blasts, no fake urgency – just honest coordination.'
                                    },
                                    {
                                        title: 'Volume with quality',
                                        text: 'We run consistent outbound at scale, while still qualifying timing, decision-makers, and fit before booking a meeting.'
                                    },
                                    {
                                        title: 'Pilot-friendly model',
                                        text: 'Start with a small test in one region. Prove the value on a few meetings before expanding.'
                                    }
                                ].map((block) => (
                                    <div key={block.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                                        <h3 className="text-xl font-semibold text-slate-900">{block.title}</h3>
                                        <p className="mt-3 text-slate-600">{block.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="about" className="border-t border-slate-200 bg-slate-50 py-16">
                        <div className="mx-auto max-w-6xl px-6">
                            <div className="grid gap-8 md:grid-cols-[2fr,1fr] md:items-center">
                                <div>
                                    <h2 className="text-3xl font-semibold text-slate-900">About Property Outreach</h2>
                                    <p className="mt-4 text-slate-600">
                                        Property Outreach was created to fix a simple problem: service vendors struggle to get in front of the right decision-makers, and
                                        HOAs get approached at the wrong time or in the wrong way. Our role is to stand in the middle – coordinating outbound, qualifying
                                        timing, and setting up focused meetings that respect everyone&apos;s time.
                                    </p>
                                    <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                        <h3 className="text-lg font-semibold text-slate-900">Current focus</h3>
                                        <p className="mt-3 text-slate-600">
                                            We currently focus on HOAs and property managers in the Denver metro area for landscaping and snow removal services.
                                        </p>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                    <div className="flex items-start gap-3">
                                        <div className={`mt-1 h-10 w-10 rounded-full ${accentBg} opacity-20`} aria-hidden />
                                        <div>
                                            <p className="text-sm font-semibold text-slate-800">What we stand for</p>
                                            <p className="mt-2 text-sm text-slate-600">
                                                Respectful outreach, transparent meetings, and clear expectations so communities and vendors both feel in control.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-700">
                                        <div className="rounded-xl bg-slate-50 p-4">
                                            <p className="text-xs uppercase tracking-wide text-slate-500">Built for</p>
                                            <p className="mt-1 font-semibold text-slate-900">HOA decision-makers</p>
                                        </div>
                                        <div className="rounded-xl bg-slate-50 p-4">
                                            <p className="text-xs uppercase tracking-wide text-slate-500">Partners</p>
                                            <p className="mt-1 font-semibold text-slate-900">Local service vendors</p>
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-[#E0ECFF] blur-2xl" aria-hidden />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="contact" className="bg-white py-16">
                        <div className="mx-auto max-w-6xl px-6">
                            <div className="max-w-3xl">
                                <h2 className="text-3xl font-semibold text-slate-900">Book an intro call</h2>
                                <p className="mt-3 text-slate-600">
                                    Whether you are an HOA, a property manager, or a service vendor, use the form below to request an intro call. We will get back to you
                                    within one business day.
                                </p>
                            </div>
                            <form
                                name="contact"
                                method="POST"
                                className="mt-10 grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
                            >
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-slate-800" htmlFor="name">
                                            Name *
                                        </label>
                                        <input
                                            id="name"
                                            name="Name"
                                            required
                                            className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 transition focus:border-[#1F7A8C]"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-slate-800" htmlFor="organization">
                                            Organization
                                        </label>
                                        <input
                                            id="organization"
                                            name="Organization"
                                            className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 transition focus:border-[#1F7A8C]"
                                        />
                                    </div>
                                </div>
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-slate-800" htmlFor="email">
                                            Email *
                                        </label>
                                        <input
                                            id="email"
                                            name="Email"
                                            type="email"
                                            required
                                            className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 transition focus:border-[#1F7A8C]"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-slate-800" htmlFor="phone">
                                            Phone
                                        </label>
                                        <input
                                            id="phone"
                                            name="Phone"
                                            className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 transition focus:border-[#1F7A8C]"
                                        />
                                    </div>
                                </div>
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-slate-800" htmlFor="role">
                                            I am a...
                                        </label>
                                        <select
                                            id="role"
                                            name="Role"
                                            className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 transition focus:border-[#1F7A8C]"
                                        >
                                            <option>HOA board member</option>
                                            <option>Property manager</option>
                                            <option>Service vendor</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-slate-800" htmlFor="city">
                                            City / Region
                                        </label>
                                        <input
                                            id="city"
                                            name="City / Region"
                                            className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 transition focus:border-[#1F7A8C]"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-slate-800" htmlFor="message">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="Message"
                                        rows={4}
                                        className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 transition focus:border-[#1F7A8C]"
                                    />
                                </div>
                                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                    <button
                                        type="submit"
                                        className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:shadow-lg ${accentBg}`}
                                    >
                                        Submit
                                    </button>
                                    <p className="text-sm text-slate-600">
                                        Prefer email? Contact: <span className="font-semibold text-slate-800">info@propertyoutreach.com</span>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </section>
                </main>

                <footer className="border-t border-slate-200 bg-slate-50">
                    <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-6 text-sm text-slate-600 sm:flex-row sm:items-center">
                        <p>© {new Date().getFullYear()} Property Outreach. All rights reserved.</p>
                        <div className="flex flex-wrap items-center gap-4">
                            {[
                                { label: 'How it works', href: '#how-it-works' },
                                { label: 'For HOAs', href: '#for-hoas' },
                                { label: 'For Service Vendors', href: '#for-vendors' },
                                { label: 'Contact', href: '#contact' }
                            ].map((link) => (
                                <a key={link.href} href={link.href} className="transition hover:text-slate-900">
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
