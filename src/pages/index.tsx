import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const accent = 'text-[#1F7A8C]';
const accentBg = 'bg-[#1F7A8C]';

const navLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Why Vendors Struggle', href: '#why-struggle' },
    { label: 'What You Get', href: '#what-you-get' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
];

const trustPoints = ['No cold calling', 'No door knocking', 'No hiring in-house sales'];

const whatYouGet = [
    'Qualified meetings with HOA and property-management decision makers',
    'A predictable flow of contract opportunities',
    'Zero time spent on outreach, calling, or follow-ups',
    'No more quoting for people who can’t sign anything',
    'Contracts that renew yearly and bring stability',
    'A proven sales process done entirely for you'
];

const struggleReasons = [
    'They’re too busy in the field to prospect',
    'They don’t know who to call inside the HOA',
    'They hate doing outbound',
    'They rely on slow, inconsistent referrals',
    'They waste hours quoting non-decision makers',
    'They have no follow-up system'
];

const howItWorks = [
    {
        title: 'Tell us your service area and ideal job size',
        text: 'We learn exactly what kind of HOAs you want to work with.',
        icon: (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h12m-7 5h13" />
            </svg>
        )
    },
    {
        title: 'We build your HOA decision-maker list',
        text: 'Verified contacts. Real decision makers. No guessing.',
        icon: (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-6-6h12" />
            </svg>
        )
    },
    {
        title: 'We run outbound for you',
        text: 'Calling, emailing, follow-ups — all handled by us.',
        icon: (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4l8 8 4-4 4 4" />
            </svg>
        )
    },
    {
        title: 'You receive booked HOA meetings',
        text: 'Qualified, pre-framed appointments with people who can sign contracts.',
        icon: (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 10l5 5 5-5" />
            </svg>
        )
    },
    {
        title: 'You close and grow',
        text: 'You focus on the work — we keep your pipeline full.',
        icon: (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
            </svg>
        )
    }
];

const reasonsToChoose = [
    'You never have to cold call again',
    'You get in front of real decision makers, not random homeowners',
    'We speak the language of HOAs and property managers',
    'Month-to-month commitment (we earn your business every month)',
    'You get a dedicated outreach system without hiring staff'
];

const testimonials = [
    {
        quote:
            'Property Outreach booked us 3 HOA meetings in the first two weeks. We closed one for a full-year landscaping contract.',
        name: 'Chris M., Landscaping (Florida)'
    },
    {
        quote: 'We used to spend hours calling HOAs ourselves. Now we just show up to meetings.',
        name: 'Daniel S., Pressure Washing (Texas)'
    },
    {
        quote: 'They got us in front of a decision maker we tried reaching for months.',
        name: 'Amanda R., Pool Services (Arizona)'
    }
];

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Property Outreach | We Book HOA Meetings For Service Vendors</title>
                <meta
                    name="description"
                    content="Property Outreach books qualified HOA meetings for service vendors so they can stay in the field and grow."
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
                            Get HOA Meetings
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
                        <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-6 px-6 py-12 text-center md:py-16">
                            <div className="w-full space-y-5">
                                <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                                    We Book HOA Meetings For You — So You Can Focus On Growing Your Business
                                </h1>
                                <p className="mx-auto max-w-2xl text-lg text-slate-600">
                                    Stop wasting time chasing HOAs. Stop guessing who the decision maker is. Stop hoping referrals show up. We deliver qualified, appointment-ready HOA meetings straight to your calendar.
                                </p>
                                <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-slate-700">
                                    {trustPoints.map((item) => (
                                        <span key={item} className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                                            <span className={`inline-block h-2.5 w-2.5 rounded-full ${accentBg}`} />
                                            {item}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                                    <a
                                        href="#contact"
                                        className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:shadow-lg ${accentBg}`}
                                    >
                                        Get HOA Meetings
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
                                <p className="text-sm text-slate-500">
                                    Built for contractors who want predictable HOA contracts without doing outbound.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section id="what-you-get" className="border-t border-slate-200 bg-slate-50 py-16">
                        <div className="mx-auto max-w-6xl px-6">
                            <h2 className="text-3xl font-semibold text-slate-900">Grow your business without doing any outbound</h2>
                            <div className="mt-6 grid gap-6 md:grid-cols-2">
                                {whatYouGet.map((item) => (
                                    <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                                        <span className={`mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white ${accentBg}`}>
                                            ✓
                                        </span>
                                        <p className="text-slate-700">{item}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-8 text-center text-lg font-semibold text-slate-900">You focus on the work. We bring you the contracts.</p>
                            <div className="mt-8 h-px w-full bg-slate-200" aria-hidden />
                        </div>
                    </section>

                    <section id="why-struggle" className="bg-white py-16">
                        <div className="mx-auto max-w-6xl px-6">
                            <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr] md:items-center">
                                <div>
                                    <h2 className="text-3xl font-semibold text-slate-900">Why Most Vendors Never Scale — And Why Property Outreach Exists</h2>
                                    <p className="mt-4 text-slate-600">Most contractors struggle to get HOA contracts because:</p>
                                    <ul className="mt-6 space-y-3 text-slate-700">
                                        {struggleReasons.map((reason) => (
                                            <li key={reason} className="flex gap-3">
                                                <span className={`mt-1 inline-block h-2.5 w-2.5 rounded-full ${accentBg}`} />
                                                <span>{reason}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="mt-8 text-lg font-semibold text-slate-900">We solve all of this from day one.</p>
                                </div>
                                <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                                    <p className="text-sm font-semibold text-slate-800">Before / After</p>
                                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                                        <div className="rounded-xl bg-white p-4 shadow-inner">
                                            <p className="text-xs uppercase tracking-wide text-slate-500">Before</p>
                                            <ul className="mt-3 space-y-2 text-sm text-slate-700">
                                                <li>Chasing referrals</li>
                                                <li>Guessing decision makers</li>
                                                <li>No follow-up system</li>
                                            </ul>
                                        </div>
                                        <div className="rounded-xl bg-white p-4 shadow-inner">
                                            <p className="text-xs uppercase tracking-wide text-slate-500">After</p>
                                            <ul className="mt-3 space-y-2 text-sm text-slate-700">
                                                <li>Verified HOA contacts</li>
                                                <li>Booked meetings delivered</li>
                                                <li>Predictable pipeline</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="absolute -right-8 -bottom-10 h-24 w-24 rounded-full bg-[#E8F3F1] blur-2xl" aria-hidden />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="how-it-works" className="border-t border-slate-200 bg-slate-50 py-16">
                        <div className="mx-auto max-w-6xl px-6">
                            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                                <div>
                                    <h2 className="text-3xl font-semibold text-slate-900">A simple system for predictable HOA contracts</h2>
                                    <p className="mt-3 max-w-2xl text-slate-600">Five steps to keep your calendar full of qualified HOA meetings.</p>
                                </div>
                                <a
                                    href="#contact"
                                    className={`inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:shadow-md ${accentBg}`}
                                >
                                    Book a Call
                                </a>
                            </div>
                            <div className="mt-10 grid gap-6 md:grid-cols-5">
                                {howItWorks.map((step, index) => (
                                    <div key={step.title} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                        <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white ${accentBg}`}>
                                            {index + 1}
                                        </div>
                                        <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                                            <span className={`flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 ${accent}`}>{step.icon}</span>
                                            <span className="text-xs uppercase tracking-wide text-slate-500">Step {index + 1}</span>
                                        </div>
                                        <h3 className="mt-3 text-lg font-semibold text-slate-900">{step.title}</h3>
                                        <p className="mt-2 text-sm text-slate-600">{step.text}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-10 flex justify-center">
                                <a
                                    href="#contact"
                                    className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:shadow-lg ${accentBg}`}
                                >
                                    Book a Call
                                </a>
                            </div>
                        </div>
                    </section>

                    <section id="why-choose" className="bg-white py-16">
                        <div className="mx-auto max-w-6xl px-6">
                            <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
                                <div>
                                    <h2 className="text-3xl font-semibold text-slate-900">We do the work nobody wants to do — and we do it well</h2>
                                    <ul className="mt-6 space-y-3 text-slate-700">
                                        {reasonsToChoose.map((reason) => (
                                            <li key={reason} className="flex gap-3">
                                                <span className={`mt-1 inline-block h-2.5 w-2.5 rounded-full ${accentBg}`} />
                                                <span>{reason}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="mt-8 text-lg font-semibold text-slate-900">
                                        We’re your silent sales engine. You just show up to the meeting and win the contract.
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-semibold text-slate-800">Trust metrics</p>
                                        <span className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${accentBg}`}>On</span>
                                    </div>
                                    <div className="mt-4 space-y-4">
                                        {[{ label: 'Decision-maker accuracy', value: '98%' }, { label: 'Average response time', value: '1 business day' }, { label: 'Commitment', value: 'Month-to-month' }].map((metric) => (
                                            <div key={metric.label} className="flex items-center justify-between rounded-xl bg-white p-4 shadow-inner">
                                                <div>
                                                    <p className="text-sm font-semibold text-slate-800">{metric.label}</p>
                                                    <p className="text-xs text-slate-600">Verified and tracked</p>
                                                </div>
                                                <p className={`text-lg font-semibold ${accent}`}>{metric.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="pricing" className="border-t border-slate-200 bg-slate-50 py-16">
                        <div className="mx-auto max-w-6xl px-6">
                            <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
                                <div>
                                    <h2 className="text-3xl font-semibold text-slate-900">Simple, predictable, performance-driven</h2>
                                    <ul className="mt-6 space-y-3 text-slate-700">
                                        {['Month-to-month', 'Transparent pricing', 'Meetings delivered directly to your calendar', 'No commissions, no surprises'].map((item) => (
                                            <li key={item} className="flex gap-3">
                                                <span className={`mt-1 inline-block h-2.5 w-2.5 rounded-full ${accentBg}`} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="mt-8 text-lg font-semibold text-slate-900">We either book meetings — or we get fired. It’s that simple.</p>
                                </div>
                                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                                        <p className="text-sm font-semibold text-slate-800">Want pricing?</p>
                                        <p className="mt-2 text-sm text-slate-600">Book a call and we’ll tailor it to your service area and contract size.</p>
                                        <a
                                            href="#contact"
                                            className={`mt-5 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:shadow-lg ${accentBg}`}
                                        >
                                            Book Your Intro Call
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="testimonials" className="bg-white py-16">
                        <div className="mx-auto max-w-6xl px-6">
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <h2 className="text-3xl font-semibold text-slate-900">What vendors say</h2>
                                    <p className="mt-3 text-slate-600">Real outcomes from vendors who let us handle outbound.</p>
                                </div>
                                <a
                                    href="#contact"
                                    className={`inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:shadow-md ${accentBg}`}
                                >
                                    Book a Call
                                </a>
                            </div>
                            <div className="mt-10 grid gap-6 md:grid-cols-3">
                                {testimonials.map((testimonial) => (
                                    <div key={testimonial.name} className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                                        <p className="text-slate-700">“{testimonial.quote}”</p>
                                        <p className={`mt-4 text-sm font-semibold ${accent}`}>{testimonial.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="final-cta" className="border-t border-slate-200 bg-slate-50 py-16">
                        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-center">
                            <h2 className="text-3xl font-semibold text-slate-900">Ready to get HOA meetings without doing any outbound?</h2>
                            <p className="text-lg text-slate-700">Let us fill your calendar with real opportunities.</p>
                            <div className="flex justify-center">
                                <a
                                    href="#contact"
                                    className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:shadow-lg ${accentBg}`}
                                >
                                    Book Your Intro Call
                                </a>
                            </div>
                            <p className="text-sm text-slate-600">We’ll respond within one business day.</p>
                        </div>
                    </section>

                    <section id="contact" className="bg-white py-16">
                        <div className="mx-auto max-w-6xl px-6">
                            <h2 className="text-3xl font-semibold text-slate-900">Contact &amp; Booking</h2>
                            <p className="mt-3 max-w-2xl text-slate-600">Tell us where you work and what you need. We’ll book the HOA meetings for you.</p>
                            <form className="mt-10 grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-slate-800" htmlFor="name">
                                            Name *
                                        </label>
                                        <input
                                            id="name"
                                            name="Name"
                                            required
                                            className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#1F7A8C]"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-slate-800" htmlFor="company">
                                            Company *
                                        </label>
                                        <input
                                            id="company"
                                            name="Company"
                                            required
                                            className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#1F7A8C]"
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
                                            className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#1F7A8C]"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-slate-800" htmlFor="phone">
                                            Phone
                                        </label>
                                        <input
                                            id="phone"
                                            name="Phone"
                                            className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#1F7A8C]"
                                        />
                                    </div>
                                </div>
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-slate-800" htmlFor="service-type">
                                            Service Type
                                        </label>
                                    <select
                                            id="service-type"
                                            name="Service Type"
                                            className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#1F7A8C]"
                                        >
                                            <option>Landscaping</option>
                                            <option>Pressure Washing</option>
                                            <option>Snow Removal</option>
                                            <option>Pool Service</option>
                                            <option>Cleaning</option>
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
                                            className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#1F7A8C]"
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
                                        className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#1F7A8C]"
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
                                { label: 'How It Works', href: '#how-it-works' },
                                { label: 'Why Vendors Struggle', href: '#why-struggle' },
                                { label: 'Pricing', href: '#pricing' },
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
