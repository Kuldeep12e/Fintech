import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero , CodeBlock , NoCodeProductSection , StackScrollSection } from "./components";


const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
         <StackScrollSection />
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <CodeBlock
          heading="Fast & Secure Payment Integration"
          subHeading="Start accepting online payments in just a few lines of code."
          codeText={`
        const PaymentGateway = new Fintech({
          key: process.env.FINTECH_API,
          secret: process.env.FINTECH_API_SECRET,
        });

        
        const payment = await PaymentGateway.createPayment({
          amount: 50000, // Amount in Rupees (₹500)
          currency: "INR",
          receipt: "receipt#1",
          notes: {
            user_name: "Kuldeep Yadav",
          }
        });

        console.log("Payment Created:", payment);

        // Capture Payment after success
        const capturePayment = await PaymentGateway.capturePayment(payment.id, {
          amount: 50000,
        });

        console.log("Payment Captured Successfully:", capturePayment);`}
        />
        <NoCodeProductSection/>
        <Testimonials />
         
        <Clients />
        <CTA />
        <Footer />
       

      </div>
    </div>
  </div>
);

export default App;
