import React from 'react';

const Faq = () => {
    return (
        <div className='ml-5 mt-29 mb-30'>
            <p className='font-bold text-4xl mb-6 ml-4'>Have Any <span className='text-[#37328b]'>Questions</span>? Checkout The <span className='text-[#15c39a]'>FAQ</span></p>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-semibold">What is this website about?</div>
                <div className="collapse-content text-sm">This platform allows users to ask questions on any topic and get answers from the community. You can also share your knowledge by answering questions posted by others.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">How do I ask a question?</div>
                <div className="collapse-content text-sm">To ask a question, simply sign in to your account, click the "Ask a Question" button, and fill out the form with your question title and description. Choose appropriate tags to help others find and answer your question more easily.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">Can I answer questions without creating an account?</div>
                <div className="collapse-content text-sm">No. You must create an account or log in to contribute by posting answers. This helps us maintain quality and accountability.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">Can I edit my question or answer after posting?</div>
                <div className="collapse-content text-sm">Yes, you can edit your question or answer at any time by clicking the "Edit" button on your post. However, major edits after receiving answers should be avoided unless they clarify your original intent.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">Can I delete my account or question?</div>
                <div className="collapse-content text-sm">Yes. You can delete your questions from your profile. To delete your account, please contact support via the Contact Us page.</div>
            </div>
        </div>
    );
};

export default Faq;