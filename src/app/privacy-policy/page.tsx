export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen pt-32 pb-12 px-6 bg-white font-sans text-black">
            <div className="max-w-4xl mx-auto">
                <h1 className="font-heading text-5xl mb-8">Privacy Policy</h1>
                <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

                <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <p>
                        At Tissac&apos;s Terrific Printing, we prioritize the privacy of our visitors and customers. This Privacy Policy document contains types of information that is collected and recorded by us and how we use it.
                    </p>

                    <h2 className="font-heading text-3xl mt-8 mb-4 text-black">Information We Collect</h2>
                    <p>
                        We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Services, or otherwise when you contact us.
                    </p>

                    <h2 className="font-heading text-3xl mt-8 mb-4 text-black">How We Use Your Information</h2>
                    <p>
                        We use the information we collect or receive:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>To facilitate account creation and logon process.</li>
                        <li>To send you administrative information.</li>
                        <li>To fulfill and manage your orders.</li>
                        <li>To protect our Services.</li>
                    </ul>

                    <h2 className="font-heading text-3xl mt-8 mb-4 text-black">Children&apos;s Privacy</h2>
                    <p>
                        We adhere to COPPA (Children&apos;s Online Privacy Protection Act). As this business is kid-led, all communications and data handling are directly supervised by parents/guardians.
                    </p>
                </div>
            </div>
        </div>
    );
}
