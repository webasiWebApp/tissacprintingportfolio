export default function TermsConditions() {
    return (
        <div className="min-h-screen pt-32 pb-12 px-6 bg-white font-sans text-black">
            <div className="max-w-4xl mx-auto">
                <h1 className="font-heading text-5xl mb-8">Terms and Conditions</h1>
                <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

                <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <p>
                        Welcome to Tissac&apos;s Terrific Printing. These terms and conditions outline the rules and regulations for the use of our services.
                    </p>

                    <h2 className="font-heading text-3xl mt-8 mb-4 text-black">1. Supervision</h2>
                    <p>
                        All services provided by Tissac&apos;s Terrific Printing are managed and supervised by parents/guardians to ensure safety, proper communication, and secure transactions.
                    </p>

                    <h2 className="font-heading text-3xl mt-8 mb-4 text-black">2. Orders</h2>
                    <p>
                        By placing an order, you agree to provide accurate details regarding your print requirements. We reserve the right to decline orders that are inappropriate or beyond our production capabilities.
                    </p>

                    <h2 className="font-heading text-3xl mt-8 mb-4 text-black">3. Payments</h2>
                    <p>
                        Payment terms will be agreed upon confirmation of your order. All financial transactions are handled by an adult guardian.
                    </p>

                    <h2 className="font-heading text-3xl mt-8 mb-4 text-black">4. Revisions</h2>
                    <p>
                        We offer a set number of revisions for design work. Additional revisions may incur extra costs.
                    </p>
                </div>
            </div>
        </div>
    );
}
