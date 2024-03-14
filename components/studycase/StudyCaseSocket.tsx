import { useState } from 'react';

export default function StudyCaseSocket({ theme }) {
    const [isLightTheme, setIsLightTheme] = useState(theme === 'light');

    const toggleTheme = () => {
        setIsLightTheme(!isLightTheme);
    };

    return (
        <div className={`py-5 px-5 ${isLightTheme ? 'bg-white' : 'bg-gray-800'} text-gray-800 dark:bg-gray-800 dark:text-white`}>
            <div className="text-lg font-bold mb-2">🌟 Study Case</div>
            <ol className="list-decimal ml-6">
                <li>Buatlah objek 3D apa saja pada hierarchy, matikan mesh renderer agar objek tidak terlihat</li>
                <li>Add Component XR Socket Interactor agar objek tersebut menjadi socket yang bisa menerima objek XR Grab Interactable</li>
                <li>Uji interaksi tersebut dengan XR Device Simulator untuk memastikan objek berperilaku seperti yang diharapkan.</li>
            </ol>
        </div>
    );
}
