import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

const faqs = [
    {
        question: "📄 Popup Information",
        answer: "Pada studi kasus ini, pop up yang muncul berisikan informasi terkait foto peta dari kota Yerussalem User dapat melihat untuk menjadikan informasi agar menambah pemahaman bagi yang membaca.",
        image: "/vr-tour/vr-umroh-pi.png",
    },
    {
        question: "📽️ Video Player",
        answer: "Video yang di tampilkan adalah tampilan dari Masjid Al-Aqsa dari seluruh bagian lingkungan masjid.",
        image: "/vr-tour/vr-umroh-vp.png",
    },
    {
        question: "🤵Character Controller",
        answer: "Pada studi kasus ini, fitur character controller digunakan sebagai tangan untuk interaksi kita dengan button yang sudah disediakan. Serta fungsinya juga adalah supaya kita bisa melihat secara 360 derajat.",
        image: "/vr-tour/vr-umroh-cc.png"
    },
    {
        question: "🎧Audio Manager",
        answer: "Pada studi kasus ini, audio manager digunakan sebagai background music untuk keseluruhan tour sehingga membawa suasana vr tour menjadi lebih nyaman untuk di eksplor.",
    },
    {
        question: "🧭Navigation",
        answer: "Navigasi pada kasus ini untuk memberikan akses kepada user untuk berpindah ke tempat yang lain di dalam VR Tour,dengan memilih opsi keterangan tempat pada pop up navigasi.",
        image: "/vr-tour/vr-umroh-nav.png",
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
                                        <Disclosure.Button className="flex w-full items-start justify-between text-left">
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
                                        {faq.image && (
                                            <div className="mt-4 flex justify-center items-center">
                                                <Image
                                                    src={faq.image}
                                                    alt={`Image for ${faq.question}`}
                                                    className="rounded-lg"
                                                    width={400}
                                                    height={400}
                                                    style={{ justifyContent: "center", alignItems: "center" }}
                                                />
                                            </div>
                                        )}
                                        <p className="text-base leading-7">{faq.answer}</p>
                                        <br/>
                                        <p className='font-bold'>Berikut adalah langkah pembuatan fitur :</p>
                                        <Link href="/features/unity-engine/information" className='italic hover:not-italic' target='_blank'>Lihat Penjelasan Selengkapnya ↗</Link>
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
