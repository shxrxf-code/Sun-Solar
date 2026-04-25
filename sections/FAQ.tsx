export default function FAQ() {
  const faqs = [
    {
      question: 'How much does solar cost?',
      answer: 'Cost depends on your usage, but government subsidies reduce it significantly. Most systems pay for themselves in 5-6 years.',
    },
    {
      question: 'How long does installation take?',
      answer: 'Installation typically takes 3-5 business days after site approval. We handle all paperwork for you.',
    },
    {
      question: 'What warranty do you offer?',
      answer: 'We provide 25-year performance warranty on all solar panels and 5-year warranty on installation work.',
    },
  ]

  return (
    <section className="py-8 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-poppins text-3xl md:text-4xl font-bold text-dark-900 mb-10 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3 className="font-semibold text-dark-900 mb-2">{faq.question}</h3>
              <p className="text-sm text-dark-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
