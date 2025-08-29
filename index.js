
        document.addEventListener('DOMContentLoaded', () => {

            // State Management
            let coins = 100;
            let heartCount = 0;
            let copyCount = 0;
            const callHistory = [];

            // DOM Elements
            const coinCountEl = document.getElementById('coin-count');
            const heartCountEl = document.getElementById('heart-count');
            const copyCountEl = document.getElementById('copy-count');
            const cardContainer = document.getElementById('card-container');
            const historyContainer = document.getElementById('history-container');
            const clearHistoryBtn = document.getElementById('clear-history-btn');
            const alertModal = document.getElementById('alert-modal');
            const alertMessage = document.getElementById('alert-message');
            const alertCloseBtn = document.getElementById('alert-close');
            const copyAlertModal = document.getElementById('copy-alert-modal');
            const copyAlertMessage = document.getElementById('copy-alert-message');
            const copyAlertCloseBtn = document.getElementById('copy-alert-close');

            // Sample Data for cards
            const services = [
                {
                    icon: 'assets/police.png',
                    name: 'Police',
                    englishName: 'Police Service',
                    hotlineNumber: '999',
                    category: 'Emergency',
                    liked: false
                },
                {
                    icon: 'assets/fire-service.png',
                    name: 'Fire Service',
                    englishName: 'Fire Service',
                    hotlineNumber: '999',
                    category: 'Emergency',
                    liked: false
                },
                {
                    icon: 'assets/emergency.png',
                    name: 'Ambulance',
                    englishName: 'Ambulance Service',
                    hotlineNumber: '108',
                    category: 'Medical',
                    liked: false
                },
                {
                    icon: 'assets/emergency.png',
                    name: 'Road Accident',
                    englishName: 'Road Accident Helpline',
                    hotlineNumber: '109',
                    category: 'Road',
                    liked: false
                },
                {
                    icon: 'assets/emergency.png',       
                    name: 'Disaster Helpline',
                    englishName: 'Disaster Management',
                    hotlineNumber: '1099',
                    category: 'Disaster',
                    liked: false
                },
                {
                    icon: 'assets/police.png',
                    name: 'Anti-Corruption',
                    englishName: 'Anti-Corruption Hotline',
                    hotlineNumber: '1024',
                    category: 'General',
                    liked: false
                },
                {
                    icon: 'assets/emergency.png',
                    name: 'National Emergency',
                    englishName: 'National Emergency Service',
                    hotlineNumber: '999',
                    category: 'Emergency',
                    liked: false
                },
                {
                    icon: 'assets/police.png',
                    name: 'Tourist Helpline',
                    englishName: 'Tourist Assistance',
                    hotlineNumber: '1199',
                    category: 'Travel',
                    liked: false
                },
                {
                    icon: 'assets/brac.png',
                    name: 'Child Helpline',
                    englishName: 'Child Welfare Service',
                    hotlineNumber: '1111',
                    category: 'Welfare',
                    liked: false
                }
            ];

            // Functions
            function updateCounts() {
                coinCountEl.textContent = coins;
                heartCountEl.textContent = heartCount;
                copyCountEl.textContent = copyCount;
            }

            function showCustomAlert(message, type) {
                if (type === 'copy') {
                    copyAlertMessage.textContent = message;
                    copyAlertModal.classList.remove('hidden');
                    copyAlertModal.classList.add('flex');
                } else {
                    alertMessage.textContent = message;
                    alertModal.classList.remove('hidden');
                    alertModal.classList.add('flex');
                }
            }

            function renderCards() {
                cardContainer.innerHTML = services.map((service, index) => `
                    <div class="bg-white rounded-2xl p-6 card-shadow flex flex-col">
                        <div class="flex justify-between items-center mb-4">
                            <img src="${service.icon}" alt="${service.name} icon" class="w-10 h-10 object-contain">
                            <i class="fas fa-heart text-gray-300 hover:text-red-500 cursor-pointer text-xl" data-index="${index}" data-action="like"></i>
                        </div>
                        <h4 class="text-xl font-bold text-gray-800">${service.name}</h4>
                        <p class="text-md text-gray-500 mb-2">${service.englishName}</p>
                        <p class="text-3xl font-bold text-gray-900 mb-4">${service.hotlineNumber}</p>
                        <span class="bg-gray-200 text-gray-700 text-sm font-medium px-2.5 py-1 rounded-full w-fit mb-4">${service.category}</span>
                        <div class="flex space-x-4 w-full">
                            <button class="flex-1 px-4 py-2 rounded-full font-semibold btn-copy transition-colors duration-200 flex items-center justify-center space-x-2" data-index="${index}" data-action="copy">
                                <i class="fas fa-copy text-sm"></i>
                                <span class="hidden sm:block">Copy</span>
                            </button>
                            <button class="flex-1 px-4 py-2 rounded-full font-semibold btn-call transition-colors duration-200 flex items-center justify-center space-x-2" data-index="${index}" data-action="call">
                                <i class="fas fa-phone-alt text-sm"></i>
                                <span class="hidden sm:block">Call</span>
                            </button>
                        </div>
                    </div>
                `).join('');
            }

            function renderHistory() {
                historyContainer.innerHTML = callHistory.map(item => `
                    <div class="bg-gray-100 p-4 rounded-xl flex justify-between items-center text-sm">
                        <div>
                            <p class="font-bold text-gray-800">${item.name}</p>
                            <p class="text-gray-600">${item.number}</p>
                        </div>
                        <span class="text-gray-500 text-xs">${item.time}</span>
                    </div>
                `).join('');
            }

            // Event Listeners
            alertCloseBtn.addEventListener('click', () => {
                alertModal.classList.remove('flex');
                alertModal.classList.add('hidden');
            });

            copyAlertCloseBtn.addEventListener('click', () => {
                copyAlertModal.classList.remove('flex');
                copyAlertModal.classList.add('hidden');
            });

            cardContainer.addEventListener('click', (e) => {
                const target = e.target.closest('button, i, img');
                if (!target) return;

                const index = target.dataset.index;
                const action = target.dataset.action;
                const service = services[index];

                if (action === 'like') {
                    heartCount++;
                    updateCounts();
                    target.classList.toggle('text-gray-300');
                    target.classList.toggle('text-red-500');
                } else if (action === 'call') {
                    if (coins < 20) {
                        showCustomAlert('Not enough coins to make a call!', 'call');
                        return;
                    }
                    coins -= 20;
                    updateCounts();
                    const now = new Date();
                    const timeString = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')} ${now.getHours() >= 12 ? 'PM' : 'AM'}`;
                    callHistory.push({
                        name: service.name,
                        number: service.hotlineNumber,
                        time: timeString
                    });
                    renderHistory();
                    showCustomAlert(`Calling ${service.name} at ${service.hotlineNumber}`, 'call');
                } else if (action === 'copy') {
                    copyCount++;
                    updateCounts();
                    const hotlineText = service.hotlineNumber;
                    navigator.clipboard.writeText(hotlineText).then(() => {
                        showCustomAlert(`Copied ${hotlineText} to clipboard!`, 'copy');
                    }).catch(err => {
                        console.error('Failed to copy text: ', err);
                        showCustomAlert('Failed to copy to clipboard.', 'copy');
                    });
                }
            });

            clearHistoryBtn.addEventListener('click', () => {
                callHistory.length = 0; // Clear the array
                renderHistory();
            });

            // Initial render
            updateCounts();
            renderCards();
            renderHistory();
        });
   