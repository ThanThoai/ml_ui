import React, {useState} from "react";
import Header from "../components/Header";
import Card from "../components/Card";

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [languages, setLanguages] = useState(null);
    const [inputLanguage, setInputLanguage] = useState('English');
    const [outputLanguage, setOutputLanguage] = useState('Polish');
    const [textToTranslate, setTextToTranslate] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const onSubmit = (event) => {

    };

    const data = [
        {
            src: "Test",
            dest: "Test",
        },
        {
            src: "Test",
            dest: "Test",
        },
        {
            src: "Test",
            dest: "Test",
        },
        {
            src: "Test",
            dest: "Test",
        },
        {
            src: "Test",
            dest: "Test",
        },
    ]

    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Home" title="Translation"/>
            <div class="container mx-auto bg-slate-300 rounded-xl shadow-xl">
                <div class="columns-2 gap-0">
                    <div>
                        <select id="large" class="block w-full px-4 py-3 text-base text-gray-900 rounded-tl-xl text-center bg-white border-l-2 border-t-2 border-b-2 border-indigo-100 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Auto Detect</option>
                            <option value="US">English</option>
                            <option value="CA">Korean</option>
                            <option value="FR">Vietnamese</option>
                        </select>
                        <textarea id="message" rows="10" class="block p-2.5 w-full text-base text-gray-900 bg-white rounded-bl-xl border-l-2 border-b-2 border-indigo-100 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..." maxLength="5000"></textarea>
                    </div>
                    <div>
                        <select id="large" class="block w-full px-4 py-3 text-base text-gray-900 rounded-tr-xl text-center bg-white border-t-2 border-r-2 border-b-2 border-indigo-100 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>English</option>
                            <option value="US">English</option>
                            <option value="CA">Vietnamese</option>
                            <option value="FR">Korean</option>
                        </select>
                        <textarea id="message" rows="10" class="block p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-br-xl border-r-2 border-b-2 border-indigo-100 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled></textarea>
                        <span class='bottom-0 right-0'>AAAAAAAAAA</span>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <textarea id="message" rows="3" class="block p-2.5 w-full text-base text-gray-900 bg-white rounded-xl border border-indigo-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="If you have a better suggestion for this translations, please write it here..."></textarea>
        </div>
    )
}


export default Home;