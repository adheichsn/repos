import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

const faqs = [
    {
        question: "📄 Popup Information",
        answer: "Pada Studi kasus ini Pop Up Information yang muncul pada User Interface yaitu mengenai Informasi yang berkaitan dengan objek, dan ada beberapa pilihan opsi dari Pop Up Information yang dapat di pilih oleh user dalam hal untuk memeriksa objek.",
        image: "/vr-tour/unjani-pi.png",
        link: "/features/unity-engine/information",
    },
    {
        question: "📽️ Video Player",
        answer: "Dalam Kasus ini video player digunakan untuk pengenalan Jendral Achmad Yani yang dapat di saksikan oleh user sebagai edukasi terkait Jendral Achmad Yani.",
        image: "/vr-tour/unjani-vp.png",
        link: "/features/unity-engine/video",
    },
    {
        question: "🤵Character Controller",
        answer: "Pada studi kasus ini, fitur character controller digunakan sebagai tangan untuk interaksi kita dengan button yang sudah disediakan. Serta fungsinya juga adalah supaya kita bisa melihat secara 360 derajat.",
        image: "/vr-tour/unjani-cc.png",
        link: "/features/unity-engine/character",
    },
    {
        question: "🎧Audio Manager",
        answer: "Pada studi kasus ini, audio manager digunakan sebagai background music untuk keseluruhan tour sehingga membawa suasana vr tour menjadi lebih nyaman untuk di eksplor.",
        link: "/features/unity-engine/audio",
    },
    {
        question: "🧭Navigation",
        answer: "Pada Kasus ini Tombol Navigasi dapat di tekan oleh user untuk melihat dari informasi bagunan yang ada pada Universitas Jendral Achmad Yani baik berupa foto gedung maupun informasi singkat.",
        image: "/vr-tour/unjani-nav.png",
        link: "/features/unity-engine/navigation",
    },
    {
        question: "📃Quiz System",
        answer: "ada Kasus VR Unjani ini terdapat Pertanyaan Quiz yang harus di lakukan oleh user sebagai sarana untuk mencari tahu sebagai mana Pengetahuan yang di peroleh oleh user setelah melakukan VR Tour.",
        image: "/vr-tour/unjani-qs.png",
        link: "/features/unity-engine/quizs",
    },
    {
        question: "⚙️Object Interactive",
        answer: "Pada Kasus ini terdapat object yang dapat di sentuh oleh user untuk menandai status seorang pasien dengan kartu yang berbeda warna menjelaskan perbedaan status tiap pasien.",
        image: "/vr-tour/unjani-oi.png",
        link: "/features/unity-engine/object",
    },
]

export default function VrUnjani() {
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
                                        <Link href={faq.link} className='italic hover:not-italic' target='_blank'>Lihat Penjelasan Selengkapnya ↗</Link>
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
