import styles from "./FAQ.module.css";

const FAQ = () => {
  const faqs = [
    { question: "What is Next.js?", answer: "Next.js is a React framework..." },
  ];

  return (
    <div className={styles.faq}>
      <h2>FAQ</h2>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index}>
            <details>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
