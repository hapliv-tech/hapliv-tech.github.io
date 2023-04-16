import Head from 'next/head';
// import { SliderData } from 'components/sliderData';
import FaqItem from 'components/faq-item';
import { FaqData } from 'components/faq';
export default function FaqsPage({ props }) {
    return (
        <>
            <Head>
                <title>Frequently Asked Questions (FAQs) | Hapliv Dental Clinic</title>
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": FaqData.faqs.map((faq) => {
                            return {
                                "@type": "Question",
                                "name": faq.question,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": faq.answers[0]
                                }
                            };
                        }
                        )
                    })
                }}>
                </script>
            </Head>
            <div className='container items-center justify-center p-4 m-auto'>
                <div className='mt-36'>
                    <div className='flex items-center justify-center'>
                        <h1 className='text-3xl font-bold'>Frequently Asked Questions (FAQs)</h1>
                    </div>

                    <article className='p-4'>
                        <p className='mt-4'>
                            At Hapliv Dental Clinic, we believe that taking care of your teeth and gums is essential to maintaining good overall health. Here are some frequently asked questions about dental problems to help you better understand how to prevent and treat them.
                        </p>
                    </article>

                    <section>
                        {FaqData.faqs.map((faq, idx) => {
                            return <FaqItem faq={faq} key={idx}></FaqItem>

                        })}
                    </section>
                    <section>
                        <p className='p-4'>Not found about what you were looking for? No worries you can Book a consultation with us today and get your queries resolved.</p>

                    </section>

                </div>



            </div>
        </>
    );
};

