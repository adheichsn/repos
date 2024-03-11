import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
        question: "Popup Information",
        answer:
            "Pada studi kasus ini, pop up yang muncul berisikan informasi terkait foto peta dari kota Yerussalem User dapat melihat untuk menjadikan informasi agar menambah pemahaman bagi yang membaca",
    },
    {
        question: "Video Player",
        answer:
            "Pada studi kasus ini, pop up yang muncul berisikan informasi terkait foto peta dari kota Yerussalem User dapat melihat untuk menjadikan informasi agar menambah pemahaman bagi yang membaca",
    },
    {
        question: "Character Controller",
        answer:
            "Pada studi kasus ini, pop up yang muncul berisikan informasi terkait foto peta dari kota Yerussalem User dapat melihat untuk menjadikan informasi agar menambah pemahaman bagi yang membaca",
    },
    {
        question: "Audio Manager",
        answer:
            "Pada studi kasus ini, pop up yang muncul berisikan informasi terkait foto peta dari kota Yerussalem User dapat melihat untuk menjadikan informasi agar menambah pemahaman bagi yang membaca",
    },
    {
        question: "Navigation",
        answer:
            "Pada studi kasus ini, pop up yang muncul berisikan informasi terkait foto peta dari kota Yerussalem User dapat melihat untuk menjadikan informasi agar menambah pemahaman bagi yang membaca",
    },
]

export default function VrUmroh() {
    return (
        <div>
            <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                <dl className="space-y-6 divide-y divide-gray-900/10">
                    {faqs.map((faq) => (
                        <Disclosure as="div" key={faq.question} className="pt-6">
                            {({ open }) => (
                                <>
                                    <dt>
                                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-slate-400">
                                            <span className="text-base font-semibold leading-7">{faq.question}</span>
                                            <span className="ml-6 flex h-7 items-center">
                                                {open ? (
                                                    <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                ) : (
                                                    <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                )}
                                            </span>
                                        </Disclosure.Button>
                                    </dt>
                                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                        <p className="text-base leading-7 text-slate-400">{faq.answer}</p>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    ))}
                </dl>
            </div>
        </div>
    )
}
