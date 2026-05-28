/* ==========================================================================
   MELOCHAT - APPLICATION ENGINE & INTERACTIVE STATE SIMULATOR (V2)
   ========================================================================== */

// --- NESTED GEOGRAPHIC DATABASE WITH MAP COORDINATES ---
const LOCATION_COORDINATES = {
  "India": {
    "Kerala": {
      "Kochi": [9.9312, 76.2673],
      "Kozhikode": [11.2588, 75.7804],
      "Thiruvananthapuram": [8.5241, 76.9366],
      "Thrissur": [10.5276, 76.2144]
    },
    "Maharashtra": {
      "Mumbai": [19.0760, 72.8777],
      "Pune": [18.5204, 73.8567],
      "Thane": [19.2183, 72.9781]
    },
    "Karnataka": {
      "Bengaluru": [12.9716, 77.5946],
      "Mysuru": [12.2958, 76.6394],
      "Mangaluru": [12.9141, 74.8560]
    },
    "Tamil Nadu": {
      "Chennai": [13.0827, 80.2707],
      "Coimbatore": [11.0168, 76.9558],
      "Madurai": [9.9252, 78.1198]
    },
    "Delhi": {
      "New Delhi": [28.6139, 77.2090],
      "Dwarka": [28.5823, 77.0500],
      "Rohini": [28.7161, 77.1165]
    }
  },
  "USA": {
    "California": {
      "Los Angeles": [34.0522, -118.2437],
      "San Francisco": [37.7749, -122.4194],
      "San Diego": [32.7157, -117.1611]
    },
    "New York": {
      "New York City": [40.7128, -74.0060],
      "Buffalo": [42.8864, -78.8784]
    },
    "Texas": {
      "Houston": [29.7604, -95.3698],
      "Austin": [30.2672, -97.7431]
    }
  },
  "UK": {
    "England": {
      "London": [51.5074, -0.1278],
      "Manchester": [53.4808, -2.2426],
      "Birmingham": [52.4862, -1.8904]
    },
    "Scotland": {
      "Edinburgh": [55.9533, -3.1883],
      "Glasgow": [55.8642, -4.2518]
    }
  },
  "Canada": {
    "Ontario": {
      "Toronto": [43.6532, -79.3832],
      "Ottawa": [45.4215, -75.6972]
    },
    "Quebec": {
      "Montreal": [45.5017, -73.5673],
      "Quebec City": [46.8139, -71.2080]
    },
    "British Columbia": {
      "Vancouver": [49.2827, -123.1207]
    }
  },
  "Australia": {
    "New South Wales": {
      "Sydney": [-33.8688, 151.2093]
    },
    "Victoria": {
      "Melbourne": [-37.8136, 144.9631]
    }
  }
};

// Preset stranger profiles for matching (mapped with coordinates)
const STRANGER_ROSTER = [
  {
    username: "aisha_k",
    name: "Aisha",
    gender: "Female",
    age: 22,
    bio: "Love listening to music and travelling ✈️. Artist & foodie.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    interestedIn: "Men",
    country: "India",
    state: "Kerala",
    district: "Kochi",
    coords: [9.9312, 76.2673],
    isVerified: true,
    isPremium: false,
    dialogues: {
      "Romantic": [
        { text: "Heyy 💖", delay: 1500 },
        { text: "How's your day going?", delay: 3000 },
        { text: "It's been amazing so far 😍", delay: 3000 },
        { text: "What do you like to do in free time?", delay: 3500 },
        { text: "I love listening to music and travelling ✈️", delay: 4000 }
      ],
      "Normal Chat": [
        { text: "Hello! What's up?", delay: 1500 },
        { text: "Nothing much, just chilling here.", delay: 3000 }
      ]
    }
  },
  {
    username: "rohan_nair",
    name: "Rohan",
    gender: "Male",
    age: 24,
    bio: "Gym enthusiast, football player. Let's talk about movies!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    interestedIn: "Women",
    country: "India",
    state: "Kerala",
    district: "Kozhikode",
    coords: [11.2588, 75.7804], // ~150km from Kochi
    isVerified: false,
    isPremium: true,
    dialogues: {
      "Normal Chat": [
        { text: "Hey bro! What's up?", delay: 1500 },
        { text: "Nice. Have you watched the new Marvel movie?", delay: 3000 }
      ],
      "Friendly Chat": [
        { text: "Hey there! Nice matching with you.", delay: 1200 },
        { text: "I'm Rohan. Tell me about yourself!", delay: 3000 }
      ]
    }
  },
  {
    username: "neha_b",
    name: "Neha",
    gender: "Female",
    age: 21,
    bio: "Computer engineering student. Loves anime and coding 💻.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    interestedIn: "Everyone",
    country: "India",
    state: "Karnataka",
    district: "Bengaluru",
    coords: [12.9716, 77.5946], // ~350km from Kochi
    isVerified: true,
    isPremium: true,
    dialogues: {
      "Deep Talk": [
        { text: "Hey. Honestly, sometimes I feel so overwhelmed by engineering studies.", delay: 1800 },
        { text: "Thanks for listening. Do you ever feel like you are running in a loop?", delay: 3500 },
        { text: "I appreciate your advice 😊. It means a lot.", delay: 4000 }
      ],
      "Need Advice": [
        { text: "Hey! Can I ask you something? How do you deal with stress?", delay: 1500 },
        { text: "Yeah, that makes sense. I struggle to sleep during exams.", delay: 3000 }
      ]
    }
  },
  {
    username: "riya_sen",
    name: "Riya",
    gender: "Female",
    age: 23,
    bio: "Fashion blogger. Life is too short to wear clothes 👗.",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150",
    interestedIn: "Men",
    country: "India",
    state: "Maharashtra",
    district: "Mumbai",
    coords: [19.0760, 72.8777],
    isVerified: false,
    isPremium: false,
    dialogues: {
      "Friendly Chat": [
        { text: "Hey babe! What's your style vibe?", delay: 1500 },
        { text: "Haha that's true 😄", delay: 3000 }
      ],
      "Flirty / Horny": [
        { text: "Hey there handsome... 🔥", delay: 1500 },
        { text: "What are you wearing right now?", delay: 3000 }
      ]
    }
  },
  {
    username: "anjali_k",
    name: "Anjali",
    gender: "Female",
    age: 22,
    bio: "Looking for girls. Quiet evenings and good books 🌈.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150",
    interestedIn: "Women",
    country: "India",
    state: "Kerala",
    district: "Kochi",
    coords: [9.9312, 76.2673], // Under 100km Kochi
    isVerified: true,
    isPremium: true,
    dialogues: {
      "Lesbian": [
        { text: "Hey gorgeous 🌈", delay: 1500 },
        { text: "Nice matching with you. What kind of vibe are you looking for?", delay: 3000 },
        { text: "I'm totally a romantic person. I love late night drives.", delay: 4000 }
      ]
    }
  },
  {
    username: "dev_gupta",
    name: "Dev",
    gender: "Male",
    age: 25,
    bio: "Software developer. Guitarist 🎸. Coffee lover.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
    interestedIn: "Women",
    country: "India",
    state: "Delhi",
    district: "New Delhi",
    coords: [28.6139, 77.2090],
    isVerified: false,
    isPremium: false,
    dialogues: {
      "Normal Chat": [
        { text: "Hey! What's up?", delay: 1500 },
        { text: "Cool. I am just practicing some riffs on my guitar.", delay: 3000 }
      ],
      "Red Flag": [
        { text: "Hey, honestly my ex was so toxic. She blocked me because I went to a party with my friends.", delay: 1500 },
        { text: "Wait, do you think checking your partner's phone is normal?", delay: 3500 }
      ]
    }
  },
  {
    username: "sarah_la",
    name: "Sarah",
    gender: "Female",
    age: 23,
    bio: "California girl. Beaches & sunshine ☀️",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    interestedIn: "Men",
    country: "USA",
    state: "California",
    district: "Los Angeles",
    coords: [34.0522, -118.2437],
    isVerified: true,
    isPremium: false,
    dialogues: {
      "Normal Chat": [
        { text: "Hi! How's it going?", delay: 1500 },
        { text: "Beautiful sunny day here in LA. What's the weather like there?", delay: 3000 }
      ],
      "Romantic": [
        { text: "Heyy 💖", delay: 1500 },
        { text: "Tell me something sweet about you.", delay: 3000 }
      ]
    }
  }
];

const PROFANITY_LIST = ["abuse", "bastard", "bitch", "fuck", "asshole", "shit", "cunt", "faggot", "dick", "pussy"];

// --- INITIAL STATE ---
let state = {
  currentUser: null,
  activeScreen: 'screen-auth',
  activeCategory: 'Normal Chat',
  interestPreference: 'Everyone',
  selectedLocation: {
    country: "India",
    state: "Kerala",
    district: "Kochi",
    coords: [9.9312, 76.2673] // Kochi coords
  },
  limitDistance: true, // limit to 100km
  activeChat: null,
  savedChats: [],
  blockedUsers: [],
  reportsList: [],
  bannedUsers: ["spammer_melo", "fake_girl_99"],
  onlineUsersCount: 1402,
  subscriptionActive: false,
  subscriptionExpiry: null,
  
  isRecording: false,
  mediaRecorder: null,
  audioChunks: [],
  recordInterval: null,
  recordDuration: 0,
  
  lastMessageTimes: [],
  isMuted: false
};

// --- LEAFLET GLOBAL INSTANCES ---
let leafletMap = null;
let leafletMarker = null;
let leafletCircle = null;

// --- DOM ELEMENTS CACHE ---
const dom = {
  screens: {
    auth: document.getElementById('screen-auth'),
    startChat: document.getElementById('screen-start-chat'),
    matching: document.getElementById('screen-matching'),
    strangerChat: document.getElementById('screen-stranger-chat'),
    messagesList: document.getElementById('screen-messages-list'),
    profile: document.getElementById('screen-profile'),
    admin: document.getElementById('screen-admin')
  },
  navbar: document.getElementById('global-navbar'),
  header: document.getElementById('global-header'),
  navItems: document.querySelectorAll('.nav-item'),
  
  // Auth Screen
  authForm: document.getElementById('auth-form'),
  authModeTabs: document.querySelectorAll('.auth-mode-tab'),
  selectedAvatarImg: document.getElementById('selected-avatar-img'),
  avatarPresetImgs: document.querySelectorAll('.avatar-preset-img'),
  authAvatarFile: document.getElementById('auth-avatar-file'),
  authUsername: document.getElementById('auth-username'),
  authName: document.getElementById('auth-name'),
  authGender: document.getElementById('auth-gender'),
  authAge: document.getElementById('auth-age'),
  authBio: document.getElementById('auth-bio'),
  authInterestedIn: document.getElementById('auth-interested-in'),
  authCountry: document.getElementById('auth-country'),
  authState: document.getElementById('auth-state'),
  authDistrict: document.getElementById('auth-district'),
  authSubmitBtn: document.getElementById('auth-submit-btn'),
  googleAuthBtn: document.getElementById('google-auth-btn'),
  
  // Start Chat Screen
  interestOptions: document.querySelectorAll('.interest-option'),
  locationPickerTrigger: document.getElementById('location-picker-trigger'),
  displayLocationLabel: document.getElementById('display-location-label'),
  chatTypeCards: document.querySelectorAll('.chat-type-card'),
  startChatBtn: document.getElementById('start-chat-btn'),
  activeUserCount: document.getElementById('active-user-count'),
  
  // Matching Screen
  cancelMatchingBtn: document.getElementById('cancel-matching-btn'),
  tagPrefGender: document.getElementById('tag-pref-gender'),
  tagPrefCategory: document.getElementById('tag-pref-category'),
  tagPrefLocation: document.getElementById('tag-pref-location'),
  radarUserPhoto: document.getElementById('radar-user-photo'),
  
  // Stranger Chat Screen
  chatBackToHome: document.getElementById('chat-back-to-home'),
  chatStrangerAvatar: document.getElementById('chat-stranger-avatar'),
  chatStrangerName: document.getElementById('chat-stranger-name'),
  chatStrangerVerified: document.getElementById('chat-stranger-verified'),
  chatStrangerPremium: document.getElementById('chat-stranger-premium'),
  chatStrangerStatus: document.getElementById('chat-stranger-status'),
  chatReportBtn: document.getElementById('chat-report-btn'),
  chatMenuBtn: document.getElementById('chat-menu-btn'),
  chatActiveCategoryLabel: document.getElementById('chat-active-category-label'),
  strangerChatFeed: document.getElementById('stranger-chat-feed'),
  strangerTypingRow: document.getElementById('stranger-typing-row'),
  strangerTypingText: document.getElementById('stranger-typing-text'),
  chatSendForm: document.getElementById('chat-send-form'),
  chatMessageInput: document.getElementById('chat-message-input'),
  emojiPickerBtn: document.getElementById('emoji-picker-btn'),
  attachmentDrawerBtn: document.getElementById('attachment-drawer-btn'),
  voiceRecorderBtn: document.getElementById('voice-recorder-btn'),
  chatSendBtn: document.getElementById('chat-send-btn'),
  actionExitChat: document.getElementById('action-exit-chat'),
  actionNextChat: document.getElementById('action-next-chat'),
  actionSaveChat: document.getElementById('action-save-chat'),
  
  // Messages Screen
  msgTabs: document.querySelectorAll('.msg-tab'),
  searchThreadsInput: document.getElementById('search-threads-input'),
  messagesThreadsContainer: document.getElementById('messages-threads-container'),
  
  // Profile Screen
  profileDisplayImg: document.getElementById('profile-display-img'),
  profileDisplayName: document.getElementById('profile-display-name'),
  profileDisplayId: document.getElementById('profile-display-id'),
  profileChangeAvatarBtn: document.getElementById('profile-change-avatar-btn'),
  profileEditNameBtn: document.getElementById('profile-edit-name-btn'),
  privacyShowName: document.getElementById('privacy-show-name'),
  privacyShowPhoto: document.getElementById('privacy-show-photo'),
  privacyShowAge: document.getElementById('privacy-show-age'),
  privacyShowLocation: document.getElementById('privacy-show-location'),
  privacyShowBio: document.getElementById('privacy-show-bio'),
  interestsCountBadge: document.getElementById('interests-count-badge'),
  blockedCountBadge: document.getElementById('blocked-count-badge'),
  profileLogoutBtn: document.getElementById('profile-logout-btn'),
  
  // Admin Screen
  adminToggleBtn: document.getElementById('admin-toggle-btn'),
  headerSettingsBtn: document.getElementById('header-settings-btn'),
  adminBackBtn: document.getElementById('admin-back-btn'),
  adminStatUsers: document.getElementById('admin-stat-users'),
  adminStatMatches: document.getElementById('admin-stat-matches'),
  adminStatRevenue: document.getElementById('admin-stat-revenue'),
  adminStatBanned: document.getElementById('admin-stat-banned'),
  adminReportsList: document.getElementById('admin-reports-list'),
  adminSpyMatchList: document.getElementById('admin-spy-match-list'),
  adminSpyChatPanel: document.getElementById('admin-spy-chat-panel'),
  adminSpyMessages: document.getElementById('admin-spy-messages'),
  closeSpyBtn: document.getElementById('close-spy-btn'),
  spyP1: document.getElementById('spy-p1'),
  spyP2: document.getElementById('spy-p2'),
  adminBanUsernameInput: document.getElementById('admin-ban-username-input'),
  adminQuickBanBtn: document.getElementById('admin-quick-ban-btn'),
  adminQuickUnbanBtn: document.getElementById('admin-quick-unban-btn'),
  bannedUsersTagsContainer: document.getElementById('banned-users-tags-container'),
  
  // Drawers and Modals
  chatActionsDrawer: document.getElementById('chat-actions-drawer'),
  closeActionsDrawer: document.getElementById('close-actions-drawer'),
  drawerActionExit: document.getElementById('drawer-action-exit'),
  drawerActionNext: document.getElementById('drawer-action-next'),
  drawerActionSave: document.getElementById('drawer-action-save'),
  drawerActionReport: document.getElementById('drawer-action-report'),
  drawerActionBlock: document.getElementById('drawer-action-block'),
  
  attachmentDrawer: document.getElementById('attachment-drawer'),
  closeAttachmentDrawer: document.getElementById('close-attachment-drawer'),
  attachPhotoInput: document.getElementById('attach-photo-input'),
  attachCameraBtn: document.getElementById('attach-camera-btn'),
  attachGalleryBtn: document.getElementById('attach-gallery-btn'),
  attachFileInput: document.getElementById('attach-file-input'),
  attachVoiceBtn: document.getElementById('attach-voice-btn'),
  attachLocationBtn: document.getElementById('attach-location-btn'),
  attachContactBtn: document.getElementById('attach-contact-btn'),
  
  voiceRecorderOverlay: document.getElementById('voice-recorder-overlay'),
  recordingTimer: document.getElementById('recording-timer'),
  waveformCanvas: document.getElementById('waveform-canvas'),
  cancelVoiceBtn: document.getElementById('cancel-voice-btn'),
  stopSendVoiceBtn: document.getElementById('stop-send-voice-btn'),
  
  razorpayModal: document.getElementById('razorpay-modal'),
  closePaymentModal: document.getElementById('close-payment-modal'),
  payNowBtn: document.getElementById('pay-now-btn'),
  paymentLoader: document.getElementById('payment-loader'),
  paymentLoaderStatus: document.getElementById('payment-loader-status'),
  paymentTabItems: document.querySelectorAll('.payment-tab-item'),
  paymentMethodFields: document.querySelectorAll('.payment-method-fields'),
  bankSelectBtns: document.querySelectorAll('.bank-select-btn'),
  
  profileEditModal: document.getElementById('profile-edit-modal'),
  closeProfileEditModal: document.getElementById('close-profile-edit-modal'),
  editProfileAvatarFile: document.getElementById('edit-profile-avatar-file'),
  editProfileName: document.getElementById('edit-profile-name'),
  editProfileUsername: document.getElementById('edit-profile-username'),
  editProfileGender: document.getElementById('edit-profile-gender'),
  editProfileAge: document.getElementById('edit-profile-age'),
  editProfileInterestedIn: document.getElementById('edit-profile-interested-in'),
  editProfileBio: document.getElementById('edit-profile-bio'),
  editProfileCountry: document.getElementById('edit-profile-country'),
  editProfileState: document.getElementById('edit-profile-state'),
  editProfileDistrict: document.getElementById('edit-profile-district'),
  saveProfileDetailsBtn: document.getElementById('save-profile-details-btn'),
  
  locationPickerModal: document.getElementById('location-picker-modal'),
  closeLocationPickerModal: document.getElementById('close-location-picker-modal'),
  locPickerCountry: document.getElementById('loc-picker-country'),
  locPickerState: document.getElementById('loc-picker-state'),
  locPickerDistrict: document.getElementById('loc-picker-district'),
  locPickerLimitDistance: document.getElementById('loc-picker-limit-distance'),
  saveLocationPickerBtn: document.getElementById('save-location-picker-btn'),
  
  emojiPickerPopup: document.getElementById('emoji-picker-popup'),
  toastContainer: document.getElementById('toast-container')
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  initApp();
  lucide.createIcons();
});

function initApp() {
  loadLocalStorage();
  
  // Setup Location dropdown hierarchies
  setupLocationDropdownHierarchy(dom.authCountry, dom.authState, dom.authDistrict);
  setupLocationDropdownHierarchy(dom.locPickerCountry, dom.locPickerState, dom.locPickerDistrict);
  setupLocationDropdownHierarchy(dom.editProfileCountry, dom.editProfileState, dom.editProfileDistrict);
  
  setupEventListeners();
  
  if (state.currentUser) {
    updateProfileUI();
    renderChatCategories(state.currentUser.gender);
    showScreen('screen-start-chat');
  } else {
    showScreen('screen-auth');
  }
  
  startSimulationLoops();
}

function loadLocalStorage() {
  const savedUser = localStorage.getItem('melochat_user');
  if (savedUser) {
    state.currentUser = JSON.parse(savedUser);
    state.subscriptionActive = state.currentUser.subscriptionActive || false;
    state.subscriptionExpiry = state.currentUser.subscriptionExpiry || null;
    state.selectedLocation = state.currentUser.location || state.selectedLocation;
    state.interestPreference = state.currentUser.interestedIn || state.interestPreference;
    
    if (state.subscriptionExpiry && new Date().getTime() > state.subscriptionExpiry) {
      state.subscriptionActive = false;
      state.subscriptionExpiry = null;
      state.currentUser.subscriptionActive = false;
      state.currentUser.subscriptionExpiry = null;
      localStorage.setItem('melochat_user', JSON.stringify(state.currentUser));
      showToast("Your subscription has expired. Premium locked.", "warning");
    }
  }
  
  const savedHistory = localStorage.getItem('melochat_saved_chats');
  if (savedHistory) {
    state.savedChats = JSON.parse(savedHistory);
  } else {
    // Generate default mock logs
    state.savedChats = getInitialMockChats();
    localStorage.setItem('melochat_saved_chats', JSON.stringify(state.savedChats));
  }
  
  // Init accounts registry (to simulate checking registered accounts)
  if (!localStorage.getItem('melochat_accounts_registry')) {
    const registry = {
      "google_alex@gmail.com": {
        username: "alex_mercer",
        name: "Alex Mercer",
        gender: "Male",
        age: 23,
        bio: "Gym lover & Gamer",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
        interestedIn: "Women",
        location: { country: "India", state: "Kerala", district: "Kochi", coords: [9.9312, 76.2673] },
        subscriptionActive: true,
        subscriptionExpiry: new Date().getTime() + 100000000
      }
    };
    localStorage.setItem('melochat_accounts_registry', JSON.stringify(registry));
  }
}

// --- COUNTRY-STATE-DISTRICT dropdown bindings ---
function setupLocationDropdownHierarchy(countrySelect, stateSelect, districtSelect) {
  // Populate countries
  countrySelect.innerHTML = Object.keys(LOCATION_COORDINATES).map(c => `<option value="${c}">${c}</option>`).join('');
  
  const updateStates = () => {
    const country = countrySelect.value;
    const states = Object.keys(LOCATION_COORDINATES[country] || {});
    stateSelect.innerHTML = states.map(s => `<option value="${s}">${s}</option>`).join('');
    updateDistricts();
  };
  
  const updateDistricts = () => {
    const country = countrySelect.value;
    const stateVal = stateSelect.value;
    const districts = Object.keys((LOCATION_COORDINATES[country] || {})[stateVal] || {});
    districtSelect.innerHTML = districts.map(d => `<option value="${d}">${d}</option>`).join('');
  };
  
  countrySelect.addEventListener('change', updateStates);
  stateSelect.addEventListener('change', updateDistricts);
  
  updateStates();
}

// --- DYNAMIC CHAT CATEGORIES LAYOUT FILTER ---
function renderChatCategories(gender) {
  dom.chatTypeCards.forEach(card => {
    const catName = card.dataset.category;
    
    // Rule: Hide Lesbian category completely for Men/Others
    if (catName === "Lesbian") {
      if (gender === "Male" || gender === "Other") {
        card.classList.add('hidden');
        if (card.classList.contains('active')) {
          card.classList.remove('active');
          state.activeCategory = "Normal Chat";
          document.querySelector('[data-category="Normal Chat"]').classList.add('active');
        }
        return;
      } else {
        card.classList.remove('hidden');
      }
    }
    
    // Premium checks
    const isPremium = card.classList.contains('premium-card');
    if (isPremium) {
      const isFreeForUser = (gender === "Female" && catName !== "Lesbian");
      const pricingLabel = card.querySelector('.premium-badge-label');
      const lockIcon = card.querySelector('.premium-lock-tag');
      
      if (isFreeForUser) {
        // Mark as free
        if (pricingLabel) pricingLabel.innerText = "Free";
        if (lockIcon) lockIcon.style.display = "none";
        card.style.borderColor = "var(--border-glass)";
        card.style.background = "rgba(255,255,255,0.02)";
      } else {
        // Locked
        if (pricingLabel) pricingLabel.innerText = "₹499";
        if (lockIcon) lockIcon.style.display = "block";
        card.style.borderColor = "rgba(236, 72, 153, 0.15)";
      }
    }
  });
}

// --- ROUTER ENGINE ---
function showScreen(screenId) {
  state.activeScreen = screenId;
  
  Object.values(dom.screens).forEach(screen => {
    screen.classList.remove('active');
  });
  
  const targetScreen = dom.screens[screenId.replace('screen-', '')] || document.getElementById(screenId);
  if (targetScreen) targetScreen.classList.add('active');
  
  if (screenId === 'screen-auth' || screenId === 'screen-matching' || screenId === 'screen-stranger-chat' || screenId === 'screen-admin') {
    dom.header.classList.add('hidden');
    dom.navbar.classList.add('hidden');
  } else {
    dom.header.classList.remove('hidden');
    dom.navbar.classList.remove('hidden');
    
    dom.navItems.forEach(item => {
      if (item.dataset.screen === screenId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }
  
  if (screenId === 'screen-messages-list') {
    renderThreadsList();
  } else if (screenId === 'screen-admin') {
    renderAdminPanel();
  }
}

// --- INTERACTIVE MAP COMPONENT (Leaflet.js) ---
function initNeighbourhoodMap() {
  if (leafletMap !== null) {
    // Already loaded, just redraw/invalidate size
    setTimeout(() => leafletMap.invalidateSize(), 200);
    return;
  }
  
  const initialCoords = state.selectedLocation.coords || [9.9312, 76.2673];
  
  // Set view
  leafletMap = L.map('map-canvas', {
    zoomControl: true,
    attributionControl: false
  }).setView(initialCoords, 8);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18
  }).addTo(leafletMap);
  
  // Marker
  leafletMarker = L.marker(initialCoords, { draggable: true }).addTo(leafletMap);
  
  // Circle
  leafletCircle = L.circle(initialCoords, {
    color: '#c084fc',
    fillColor: '#a855f7',
    fillOpacity: 0.15,
    radius: 100000 // 100km
  }).addTo(leafletMap);
  
  // On drag end, update coords and try reverse lookup state/district
  leafletMarker.on('dragend', function (e) {
    const latlng = e.target.getLatLng();
    updateMapLocationCenter([latlng.lat, latlng.lng]);
  });
  
  // Map click
  leafletMap.on('click', function (e) {
    const latlng = e.latlng;
    updateMapLocationCenter([latlng.lat, latlng.lng]);
  });
}

function updateMapLocationCenter(coords) {
  leafletMarker.setLatLng(coords);
  leafletCircle.setLatLng(coords);
  leafletMap.panTo(coords);
  
  state.selectedLocation.coords = coords;
  
  // Reverse coordinate search: Find nearest city/district in our database
  let nearestCountry = "India";
  let nearestState = "Kerala";
  let nearestDistrict = "Kochi";
  let minDistance = Infinity;
  
  Object.keys(LOCATION_COORDINATES).forEach(cName => {
    Object.keys(LOCATION_COORDINATES[cName]).forEach(sName => {
      Object.keys(LOCATION_COORDINATES[cName][sName]).forEach(dName => {
        const dst = getHaversineDistance(coords, LOCATION_COORDINATES[cName][sName][dName]);
        if (dst < minDistance) {
          minDistance = dst;
          nearestCountry = cName;
          nearestState = sName;
          nearestDistrict = dName;
        }
      });
    });
  });
  
  // Update Dropdowns without triggering redundant change events
  dom.locPickerCountry.value = nearestCountry;
  
  // Force states update
  const states = Object.keys(LOCATION_COORDINATES[nearestCountry] || {});
  dom.locPickerState.innerHTML = states.map(s => `<option value="${s}">${s}</option>`).join('');
  dom.locPickerState.value = nearestState;
  
  // Force district update
  const districts = Object.keys(LOCATION_COORDINATES[nearestCountry][nearestState] || {});
  dom.locPickerDistrict.innerHTML = districts.map(d => `<option value="${d}">${d}</option>`).join('');
  dom.locPickerDistrict.value = nearestDistrict;
}

// Distance Formula (Haversine km)
function getHaversineDistance(coords1, coords2) {
  const R = 6371; // Earth radius
  const dLat = (coords2[0] - coords1[0]) * Math.PI / 180;
  const dLon = (coords2[1] - coords1[1]) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(coords1[0] * Math.PI / 180) * Math.cos(coords2[0] * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

// --- EVENT LISTENERS EXTENDED ---
function setupEventListeners() {
  
  // Global Navigation
  dom.navItems.forEach(item => {
    item.addEventListener('click', () => showScreen(item.dataset.screen));
  });

  // Interest Preference Switcher
  if (dom.interestOptions) {
    dom.interestOptions.forEach(opt => {
      opt.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        dom.interestOptions.forEach(o => o.classList.remove('active'));
        opt.classList.add('active');
        state.interestPreference = opt.dataset.value;
        
        if (state.currentUser) {
          state.currentUser.interestedIn = opt.dataset.value;
          localStorage.setItem('melochat_user', JSON.stringify(state.currentUser));
          updateProfileUI();
        }
      });
    });
  }

  dom.adminToggleBtn.addEventListener('click', () => showScreen('screen-admin'));
  dom.adminBackBtn.addEventListener('click', () => showScreen('screen-start-chat'));
  dom.headerSettingsBtn.addEventListener('click', () => showScreen('screen-profile'));

  // Auth Tabs Toggle
  dom.authModeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      dom.authModeTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const mode = tab.dataset.mode;
      const signupOnly = document.querySelectorAll('.signup-only-field');
      if (mode === 'login') {
        signupOnly.forEach(el => el.classList.add('hidden'));
        dom.authSubmitBtn.querySelector('span').innerText = "Login & Continue";
      } else {
        signupOnly.forEach(el => el.classList.remove('hidden'));
        dom.authSubmitBtn.querySelector('span').innerText = "Create Account & Continue";
      }
    });
  });

  // Presets selection
  dom.avatarPresetImgs.forEach(preset => {
    preset.addEventListener('click', () => {
      dom.avatarPresetImgs.forEach(p => p.classList.remove('active'));
      preset.classList.add('active');
      dom.selectedAvatarImg.src = preset.src;
    });
  });

  // Custom photo upload selector for signup avatar
  const authAvatarFile = document.getElementById('auth-avatar-file');
  if (authAvatarFile) {
    authAvatarFile.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          dom.selectedAvatarImg.src = event.target.result;
          dom.avatarPresetImgs.forEach(p => p.classList.remove('active'));
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Auth Signup & Login Flow
  dom.authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const isSignup = document.querySelector('.auth-mode-tab.active').dataset.mode === 'signup';
    const username = dom.authUsername.value.trim();
    
    if (state.bannedUsers.includes(username)) {
      showToast("This username is banned from MeloChat.", "danger");
      return;
    }
    
    let userObj = null;
    
    if (isSignup) {
      const age = parseInt(dom.authAge.value);
      if (age < 18) {
        showToast("You must be 18+ to join MeloChat.", "warning");
        return;
      }
      
      const country = dom.authCountry.value;
      const stateVal = dom.authState.value;
      const district = dom.authDistrict.value;
      const coords = ((LOCATION_COORDINATES[country] || {})[stateVal] || {})[district] || [9.9312, 76.2673];
      
      userObj = {
        username: username,
        name: dom.authName.value.trim() || "Melo User",
        gender: dom.authGender.value,
        age: age,
        bio: dom.authBio.value.trim() || "Hey there! I am using MeloChat.",
        avatar: dom.selectedAvatarImg.src,
        interestedIn: dom.authInterestedIn.value,
        location: { country, state: stateVal, district, coords },
        subscriptionActive: false,
        subscriptionExpiry: null
      };
      
      // Save Google account links to simulated accounts DB registry
      const registry = JSON.parse(localStorage.getItem('melochat_accounts_registry') || "{}");
      const googleMail = dom.authForm.dataset.googleEmail;
      if (googleMail) {
        registry[googleMail] = userObj;
        localStorage.setItem('melochat_accounts_registry', JSON.stringify(registry));
        delete dom.authForm.dataset.googleEmail;
      }
    } else {
      // Login mode: Check registry
      const registry = JSON.parse(localStorage.getItem('melochat_accounts_registry') || "{}");
      // Find account by username in registry
      let foundUser = Object.values(registry).find(u => u.username === username);
      
      if (!foundUser) {
        // Fallback mock details if offline test
        foundUser = {
          username: username,
          name: username.replace('_', ' ').replace(/\b\w/g, c => c.toUpperCase()),
          gender: "Male",
          age: 23,
          bio: "Hey there! I am using MeloChat.",
          avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150",
          interestedIn: "Women",
          location: { country: "India", state: "Kerala", district: "Kochi", coords: [9.9312, 76.2673] },
          subscriptionActive: false,
          subscriptionExpiry: null
        };
      }
      userObj = foundUser;
    }
    
    state.currentUser = userObj;
    state.subscriptionActive = userObj.subscriptionActive || false;
    state.subscriptionExpiry = userObj.subscriptionExpiry || null;
    state.selectedLocation = userObj.location;
    state.interestPreference = userObj.interestedIn || state.interestPreference;
    
    localStorage.setItem('melochat_user', JSON.stringify(userObj));
    updateProfileUI();
    renderChatCategories(userObj.gender);
    showToast("Login Successful!", "success");
    showScreen('screen-start-chat');
  });

  // Google Login & Registration Redirection Bridge
  dom.googleAuthBtn.addEventListener('click', () => {
    showToast("Connecting with Google OAuth...", "info");
    
    setTimeout(() => {
      // Simulate Google OAuth returning a mock payload
      const mockGoogleMail = "alex@gmail.com";
      const registry = JSON.parse(localStorage.getItem('melochat_accounts_registry') || "{}");
      
      if (registry[mockGoogleMail]) {
        // User exists! Sign in directly
        state.currentUser = registry[mockGoogleMail];
        state.subscriptionActive = state.currentUser.subscriptionActive || false;
        state.subscriptionExpiry = state.currentUser.subscriptionExpiry || null;
        state.selectedLocation = state.currentUser.location;
        state.interestPreference = state.currentUser.interestedIn || state.interestPreference;
        
        localStorage.setItem('melochat_user', JSON.stringify(state.currentUser));
        updateProfileUI();
        renderChatCategories(state.currentUser.gender);
        showToast(`Signed in directly via Google (${mockGoogleMail})`, "success");
        showScreen('screen-start-chat');
      } else {
        // User DOES NOT exist. Prefill Signup and redirect
        showToast("Google account connected. Complete profile creation to signup.", "warning");
        
        // Tab signup active
        document.querySelector('[data-mode="signup"]').click();
        
        // Prefill signup form
        dom.authUsername.value = "alex_mercer";
        dom.authName.value = "Alex Mercer";
        dom.selectedAvatarImg.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150";
        
        // Attach temporary reference to prefilled mail
        dom.authForm.dataset.googleEmail = mockGoogleMail;
      }
    }, 1500);
  });

  // Start Chat Location Modal triggers
  dom.locationPickerTrigger.addEventListener('click', () => {
    const loc = state.selectedLocation;
    dom.locPickerCountry.value = loc.country;
    
    // Force rebuild hierarchy
    setupLocationDropdownHierarchy(dom.locPickerCountry, dom.locPickerState, dom.locPickerDistrict);
    dom.locPickerState.value = loc.state;
    
    const districts = Object.keys(LOCATION_COORDINATES[loc.country][loc.state] || {});
    dom.locPickerDistrict.innerHTML = districts.map(d => `<option value="${d}">${d}</option>`).join('');
    dom.locPickerDistrict.value = loc.district;
    
    dom.locPickerLimitDistance.checked = state.limitDistance;
    
    dom.locationPickerModal.classList.add('active');
    
    // Invalidate Leaflet maps sizes
    setTimeout(() => {
      initNeighbourhoodMap();
      const coords = loc.coords || [9.9312, 76.2673];
      updateMapLocationCenter(coords);
    }, 200);
  });

  dom.closeLocationPickerModal.addEventListener('click', () => {
    dom.locationPickerModal.classList.remove('active');
  });

  dom.saveLocationPickerBtn.addEventListener('click', () => {
    const country = dom.locPickerCountry.value;
    const stateVal = dom.locPickerState.value;
    const district = dom.locPickerDistrict.value;
    const limit = dom.locPickerLimitDistance.checked;
    
    const coords = state.selectedLocation.coords || ((LOCATION_COORDINATES[country] || {})[stateVal] || {})[district] || [9.9312, 76.2673];
    
    state.selectedLocation = { country, state: stateVal, district, coords };
    state.limitDistance = limit;
    
    dom.displayLocationLabel.innerText = `${district}, ${stateVal}, ${country}`;
    
    // Save to current user location if logged in
    if (state.currentUser) {
      state.currentUser.location = state.selectedLocation;
      localStorage.setItem('melochat_user', JSON.stringify(state.currentUser));
    }
    
    dom.locationPickerModal.classList.remove('active');
    showToast("Neighbourhood location saved", "success");
  });

  // Loc Picker dropdown coordinate updates
  const updateMapFromLocSelects = () => {
    const country = dom.locPickerCountry.value;
    const stateVal = dom.locPickerState.value;
    const district = dom.locPickerDistrict.value;
    
    const coords = ((LOCATION_COORDINATES[country] || {})[stateVal] || {})[district];
    if (coords && leafletMap) {
      updateMapLocationCenter(coords);
    }
  };
  
  dom.locPickerCountry.addEventListener('change', updateMapFromLocSelects);
  dom.locPickerState.addEventListener('change', updateMapFromLocSelects);
  dom.locPickerDistrict.addEventListener('change', updateMapFromLocSelects);

  // Profile Edit photo selector hooks
  let tempAvatarUrl = null;
  const editProfileAvatarFile = document.getElementById('edit-profile-avatar-file');
  if (editProfileAvatarFile) {
    editProfileAvatarFile.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          tempAvatarUrl = event.target.result;
          dom.profileDisplayImg.src = event.target.result;
          showToast("New profile photo loaded! Click Save Changes to apply.", "success");
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Bind camera icon to trigger file selection
  if (dom.profileChangeAvatarBtn && editProfileAvatarFile) {
    dom.profileChangeAvatarBtn.addEventListener('click', () => {
      editProfileAvatarFile.click();
    });
  }

  // Profile Edit modal
  dom.profileEditNameBtn.addEventListener('click', () => {
    const u = state.currentUser;
    tempAvatarUrl = u.avatar;
    dom.editProfileName.value = u.name;
    dom.editProfileUsername.value = u.username;
    dom.editProfileGender.value = u.gender;
    dom.editProfileAge.value = u.age;
    dom.editProfileInterestedIn.value = u.interestedIn;
    dom.editProfileBio.value = u.bio;
    
    dom.editProfileCountry.value = u.location.country;
    setupLocationDropdownHierarchy(dom.editProfileCountry, dom.editProfileState, dom.editProfileDistrict);
    dom.editProfileState.value = u.location.state;
    
    const districts = Object.keys(LOCATION_COORDINATES[u.location.country][u.location.state] || {});
    dom.editProfileDistrict.innerHTML = districts.map(d => `<option value="${d}">${d}</option>`).join('');
    dom.editProfileDistrict.value = u.location.district;
    
    dom.profileEditModal.classList.add('active');
  });

  dom.closeProfileEditModal.addEventListener('click', () => {
    dom.profileEditModal.classList.remove('active');
  });

  // Edit profile submit saves all fields
  dom.saveProfileDetailsBtn.addEventListener('click', () => {
    const avatar = tempAvatarUrl || state.currentUser.avatar;
    const name = dom.editProfileName.value.trim();
    const username = dom.editProfileUsername.value.trim();
    const gender = dom.editProfileGender.value;
    const age = parseInt(dom.editProfileAge.value);
    const interestedIn = dom.editProfileInterestedIn.value;
    const bio = dom.editProfileBio.value.trim();
    const country = dom.editProfileCountry.value;
    const stateVal = dom.editProfileState.value;
    const district = dom.editProfileDistrict.value;
    
    if (age < 18) {
      showToast("Must be 18+ to save profile details", "warning");
      return;
    }
    
    if (name && username) {
      const coords = ((LOCATION_COORDINATES[country] || {})[stateVal] || {})[district] || [9.9312, 76.2673];
      
      state.currentUser = {
        ...state.currentUser,
        avatar, name, username, gender, age, interestedIn, bio,
        location: { country, state: stateVal, district, coords }
      };
      
      state.interestPreference = interestedIn;
      
      localStorage.setItem('melochat_user', JSON.stringify(state.currentUser));
      updateProfileUI();
      
      // Re-trigger dynamic locks/hiding of Lesbian feature
      renderChatCategories(gender);
      
      dom.profileEditModal.classList.remove('active');
      showToast("Profile details updated successfully!", "success");
    } else {
      showToast("Name and username are required fields", "warning");
    }
  });

  // Direct copy-paste other listeners from V1
  dom.chatTypeCards.forEach(card => {
    card.addEventListener('click', () => {
      const category = card.dataset.category;
      const isPremiumCategory = card.classList.contains('premium-card');
      const isEligible = checkCategoryAccess(category);
      
      if (isPremiumCategory && !isEligible) {
        state.activeCategory = category;
        openRazorpayModal();
        return;
      }
      
      dom.chatTypeCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      state.activeCategory = category;
    });
  });

  dom.startChatBtn.addEventListener('click', () => {
    if (!state.currentUser) {
      showScreen('screen-auth');
      return;
    }
    
    if (!checkCategoryAccess(state.activeCategory)) {
      openRazorpayModal();
      return;
    }
    
    startMatchmaking();
  });

  dom.cancelMatchingBtn.addEventListener('click', () => {
    showScreen('screen-start-chat');
    showToast("Match cancelled", "info");
  });

  dom.chatBackToHome.addEventListener('click', () => exitChatRoom());
  dom.chatReportBtn.addEventListener('click', () => openActionsDrawer());
  dom.chatMenuBtn.addEventListener('click', () => openActionsDrawer());
  dom.chatSendForm.addEventListener('submit', (e) => { e.preventDefault(); sendMessageFlow(); });
  dom.actionExitChat.addEventListener('click', () => exitChatRoom());
  dom.actionNextChat.addEventListener('click', () => nextChatMatch());
  dom.actionSaveChat.addEventListener('click', () => saveChatToMessages());
  
  dom.emojiPickerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dom.emojiPickerPopup.classList.toggle('hidden');
  });

  document.querySelectorAll('.emoji-grid span').forEach(emojiSpan => {
    emojiSpan.addEventListener('click', () => {
      dom.chatMessageInput.value += emojiSpan.innerText;
      dom.emojiPickerPopup.classList.add('hidden');
      dom.chatMessageInput.focus();
    });
  });

  document.addEventListener('click', () => dom.emojiPickerPopup.classList.add('hidden'));

  dom.msgTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      dom.msgTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderThreadsList();
    });
  });

  dom.searchThreadsInput.addEventListener('input', () => renderThreadsList());

  dom.profileLogoutBtn.addEventListener('click', () => {
    if (confirm("Are you sure you want to log out?")) {
      state.currentUser = null;
      state.subscriptionActive = false;
      localStorage.removeItem('melochat_user');
      showScreen('screen-auth');
      showToast("Logged out successfully.", "info");
    }
  });

  const privacyToggles = [dom.privacyShowName, dom.privacyShowPhoto, dom.privacyShowAge, dom.privacyShowLocation, dom.privacyShowBio];
  privacyToggles.forEach(toggle => {
    toggle.addEventListener('change', () => {
      showToast("Privacy settings saved locally", "success");
    });
  });

  dom.closeActionsDrawer.addEventListener('click', closeActionsDrawer);
  
  dom.drawerActionExit.addEventListener('click', () => { closeActionsDrawer(); exitChatRoom(); });
  dom.drawerActionNext.addEventListener('click', () => { closeActionsDrawer(); nextChatMatch(); });
  dom.drawerActionSave.addEventListener('click', () => { closeActionsDrawer(); saveChatToMessages(); });
  
  dom.drawerActionReport.addEventListener('click', () => {
    closeActionsDrawer();
    const reason = prompt("Enter reason for reporting this user:");
    if (reason) submitUserReport(reason);
  });
  
  dom.drawerActionBlock.addEventListener('click', () => {
    closeActionsDrawer();
    if (confirm(`Are you sure you want to block ${state.activeChat.stranger.name}?`)) {
      blockStrangerUser();
    }
  });

  dom.attachmentDrawerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dom.attachmentDrawer.classList.add('active');
  });

  dom.closeAttachmentDrawer.addEventListener('click', () => dom.attachmentDrawer.classList.remove('active'));

  dom.attachPhotoInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        sendAttachmentMessage("image", event.target.result);
        dom.attachmentDrawer.classList.remove('active');
      };
      reader.readAsDataURL(file);
    }
  });

  dom.attachFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      sendAttachmentMessage("file", file.name);
      dom.attachmentDrawer.classList.remove('active');
    }
  });

  dom.attachCameraBtn.addEventListener('click', () => {
    sendAttachmentMessage("image", "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400");
    dom.attachmentDrawer.classList.remove('active');
  });
  
  dom.attachGalleryBtn.addEventListener('click', () => {
    sendAttachmentMessage("image", "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400");
    dom.attachmentDrawer.classList.remove('active');
  });

  dom.attachLocationBtn.addEventListener('click', () => {
    sendAttachmentMessage("location", `${state.selectedLocation.district}, ${state.selectedLocation.state}`);
    dom.attachmentDrawer.classList.remove('active');
  });

  dom.attachContactBtn.addEventListener('click', () => {
    sendAttachmentMessage("contact", "Aisha (MeloUser) \n+91 98765 43210");
    dom.attachmentDrawer.classList.remove('active');
  });

  dom.attachVoiceBtn.addEventListener('click', () => {
    dom.attachmentDrawer.classList.remove('active');
    openVoiceRecorderPanel();
  });

  dom.voiceRecorderBtn.addEventListener('click', () => openVoiceRecorderPanel());
  dom.cancelVoiceBtn.addEventListener('click', cancelVoiceRecording);
  dom.stopSendVoiceBtn.addEventListener('click', stopAndSendVoiceRecording);

  dom.chatActionsDrawer.addEventListener('click', (e) => { if (e.target === dom.chatActionsDrawer) closeActionsDrawer(); });
  dom.attachmentDrawer.addEventListener('click', (e) => { if (e.target === dom.attachmentDrawer) dom.attachmentDrawer.classList.remove('active'); });

  dom.closePaymentModal.addEventListener('click', () => dom.razorpayModal.classList.remove('active'));
  dom.payNowBtn.addEventListener('click', runRazorpayPaymentPipeline);

  dom.paymentTabItems.forEach(tab => {
    tab.addEventListener('click', () => {
      dom.paymentTabItems.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const method = tab.dataset.paymethod;
      dom.paymentMethodFields.forEach(field => {
        field.classList.remove('active');
        if (field.id === `pay-fields-${method}`) field.classList.add('active');
      });
    });
  });

  dom.bankSelectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      dom.bankSelectBtns.forEach(b => b.style.borderColor = "var(--border-glass)");
      btn.style.borderColor = "#3399cc";
    });
  });

  dom.adminQuickBanBtn.addEventListener('click', () => {
    const userToBan = dom.adminBanUsernameInput.value.trim();
    if (userToBan) {
      if (!state.bannedUsers.includes(userToBan)) {
        state.bannedUsers.push(userToBan);
        showToast(`User @${userToBan} banned successfully`, "danger");
        dom.adminBanUsernameInput.value = "";
        renderAdminPanel();
      }
    }
  });

  dom.adminQuickUnbanBtn.addEventListener('click', () => {
    const userToUnban = dom.adminBanUsernameInput.value.trim();
    if (userToUnban) {
      const idx = state.bannedUsers.indexOf(userToUnban);
      if (idx !== -1) {
        state.bannedUsers.splice(idx, 1);
        showToast(`User @${userToUnban} unbanned`, "success");
        dom.adminBanUsernameInput.value = "";
        renderAdminPanel();
      }
    }
  });

  dom.closeSpyBtn.addEventListener('click', () => dom.adminSpyChatPanel.classList.add('hidden'));
}

// --- SUBSCRIPTIONS CHECK PIPELINE ---
function checkCategoryAccess(category) {
  if (!state.currentUser) return false;
  
  const freeCategories = ["Normal Chat", "Friendly Chat", "Fun Chat", "Deep Talk", "Need Advice"];
  if (freeCategories.includes(category)) return true;
  
  if (state.subscriptionActive) return true;
  
  const gender = state.currentUser.gender;
  if (gender === "Female") {
    // Free for girls: Romantic, Flirty, Red Flag
    if (category === "Romantic" || category === "Flirty / Horny" || category === "Red Flag") {
      return true;
    }
    // Girls need subscription only for Lesbian
    if (category === "Lesbian") return false;
  }
  
  // Men and Others need payment for everything premium
  return false;
}

// --- PROFILE UI UPDATES ---
function updateProfileUI() {
  if (!state.currentUser) return;
  
  dom.profileDisplayImg.src = state.currentUser.avatar;
  dom.profileDisplayName.innerText = state.currentUser.name;
  
  const existingCrown = dom.profileDisplayName.nextElementSibling;
  if (existingCrown && existingCrown.classList.contains('premium-badge')) {
    existingCrown.remove();
  }
  
  if (state.subscriptionActive) {
    dom.profileDisplayName.insertAdjacentHTML('afterend', '<span class="premium-badge"><i data-lucide="crown"></i></span>');
    lucide.createIcons();
  }
  
  const truncatedUser = state.currentUser.username.substring(0, 12);
  dom.profileDisplayId.innerText = `ID: @${truncatedUser}`;
  
  const loc = state.selectedLocation;
  dom.displayLocationLabel.innerText = `${loc.district}, ${loc.state}, ${loc.country}`;

  // Sync the home screen I'm interested in options buttons
  if (dom.interestOptions) {
    dom.interestOptions.forEach(opt => {
      if (opt.dataset.value === state.interestPreference) {
        opt.classList.add('active');
      } else {
        opt.classList.remove('active');
      }
    });
  }
}

// --- MATCHMAKING DISTANCE & PREFERENCE ENGINE ---
function startMatchmaking() {
  showScreen('screen-matching');
  
  dom.tagPrefGender.innerHTML = `<i data-lucide="${state.interestPreference === 'Women' ? 'venus' : (state.interestPreference === 'Men' ? 'mars' : 'users')}"></i> ${state.interestPreference}`;
  dom.tagPrefCategory.innerHTML = `<i data-lucide="heart-handshake"></i> ${state.activeCategory}`;
  
  const distLabel = state.limitDistance ? "Within 100km" : state.selectedLocation.district;
  dom.tagPrefLocation.innerHTML = `<i data-lucide="map-pin"></i> ${distLabel}`;
  dom.radarUserPhoto.src = state.currentUser.avatar;
  lucide.createIcons();

  const userCoords = state.selectedLocation.coords || [9.9312, 76.2673];

  let filtered = STRANGER_ROSTER.filter(stranger => {
    if (state.blockedUsers.includes(stranger.username)) return false;
    
    // Gender compatibility filter
    let genderPass = true;
    if (state.interestPreference !== 'Everyone') {
      genderPass = (stranger.gender === state.interestPreference);
    }
    
    let strangerPrefPass = true;
    if (stranger.interestedIn !== 'Everyone') {
      strangerPrefPass = (stranger.interestedIn === (state.currentUser.gender === 'Female' ? 'Women' : 'Men'));
    }
    
    // Category check
    let categoryPass = stranger.dialogues[state.activeCategory] !== undefined;
    
    // 100km radius filter math!
    let distancePass = true;
    if (state.limitDistance && stranger.coords) {
      const distance = getHaversineDistance(userCoords, stranger.coords);
      console.log(`[Distance Matcher] User to ${stranger.name}: ${distance.toFixed(1)} km`);
      distancePass = (distance <= 100);
    }
    
    return genderPass && strangerPrefPass && categoryPass && distancePass;
  });

  // Fallback to match anyone in category if no nearby users are found
  if (filtered.length === 0) {
    console.log("[Distance Matcher] No matches within 100km, falling back to global pool...");
    filtered = STRANGER_ROSTER.filter(stranger => {
      // Basic gender compatibility check
      let genderPass = true;
      if (state.interestPreference !== 'Everyone') {
        genderPass = (stranger.gender === state.interestPreference);
      }
      return genderPass && stranger.dialogues[state.activeCategory] !== undefined;
    });
  }

  const matchedStranger = filtered[Math.floor(Math.random() * filtered.length)] || STRANGER_ROSTER[0];
  
  setTimeout(() => {
    if (state.activeScreen !== 'screen-matching') return;
    enterChatRoom(matchedStranger);
  }, 3000);
}

// --- OTHER BASE METHODS ---
function enterChatRoom(stranger, isHistoryOnly = false) {
  state.activeChat = {
    stranger: stranger,
    messages: [],
    activeDialogIndex: 0,
    isHistoryOnly: isHistoryOnly
  };
  
  dom.chatStrangerAvatar.src = stranger.avatar;
  dom.chatStrangerName.innerText = stranger.name;
  dom.chatStrangerVerified.style.display = stranger.isVerified ? 'flex' : 'none';
  dom.chatStrangerPremium.style.display = stranger.isPremium ? 'flex' : 'none';
  
  dom.strangerChatFeed.innerHTML = "";
  dom.chatMessageInput.value = "";
  dom.strangerTypingRow.classList.add('hidden');
  
  dom.chatActiveCategoryLabel.innerText = getCategoryBannerText(state.activeCategory);
  
  showScreen('screen-stranger-chat');
  
  addSystemMessage(`Matched with a stranger from ${stranger.district}, ${stranger.state}`);
  
  if (isHistoryOnly) {
    const thread = state.savedChats.find(c => c.stranger.username === stranger.username && c.category === state.activeCategory);
    if (thread) {
      state.activeChat.messages = [...thread.messages];
      state.activeChat.messages.forEach(msg => {
        appendMessageBubble(msg.sender, msg.text, msg.time, "read", msg.attachmentType);
      });
      dom.chatStrangerStatus.innerText = "Offline (Reviewing Saved Chat)";
      dom.chatStrangerStatus.style.color = "var(--text-muted)";
      dom.chatSendForm.style.pointerEvents = "none";
      dom.chatSendForm.style.opacity = "0.5";
    }
  } else {
    dom.chatStrangerStatus.innerText = "Online";
    dom.chatStrangerStatus.style.color = "var(--status-online)";
    dom.chatSendForm.style.pointerEvents = "auto";
    dom.chatSendForm.style.opacity = "1";
    triggerStrangerTypingResponse();
  }
}

function getCategoryBannerText(cat) {
  switch (cat) {
    case 'Romantic': return '💖 You are in Romantic chat';
    case 'Flirty / Horny': return '🔥 You are in Horny & Flirty chat (18+)';
    case 'Red Flag': return '⚠️ You are in Red Flag chat (Share & Warn)';
    case 'Lesbian': return '🌈 You are in Lesbian chat';
    case 'Deep Talk': return '💬 You are in Deep Talk chat';
    case 'Need Advice': return '💡 You are in Advice chat';
    default: return `💬 You are in ${cat}`;
  }
}

function exitChatRoom() {
  if (state.activeChat && !state.activeChat.isHistoryOnly) {
    if (!confirm("Are you sure you want to end this conversation?")) return;
  }
  state.activeChat = null;
  showScreen('screen-start-chat');
}

function nextChatMatch() {
  showToast("Ending current chat...", "info");
  state.activeChat = null;
  startMatchmaking();
}

function saveChatToMessages() {
  if (!state.activeChat) return;
  
  const alreadySaved = state.savedChats.some(
    c => c.stranger.username === state.activeChat.stranger.username && 
         c.category === state.activeCategory
  );
  
  if (alreadySaved) {
    state.savedChats = state.savedChats.map(c => {
      if (c.stranger.username === state.activeChat.stranger.username && c.category === state.activeCategory) {
        c.messages = [...state.activeChat.messages];
        c.lastMessage = getTruncatedLastMessage();
      }
      return c;
    });
  } else {
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newSaved = {
      stranger: { ...state.activeChat.stranger },
      category: state.activeCategory,
      time: timeStr,
      lastMessage: getTruncatedLastMessage(),
      unreadCount: 0,
      messages: [...state.activeChat.messages]
    };
    state.savedChats.unshift(newSaved);
  }
  
  localStorage.setItem('melochat_saved_chats', JSON.stringify(state.savedChats));
  showToast("Chat saved to messages section!", "success");
}

function getTruncatedLastMessage() {
  if (!state.activeChat || state.activeChat.messages.length === 0) return "Empty conversation";
  const last = state.activeChat.messages[state.activeChat.messages.length - 1];
  if (last.attachmentType === 'image') return "🌄 Shared a photo";
  if (last.attachmentType === 'voice') return "🎵 Voice message";
  if (last.attachmentType === 'location') return "📍 Location shared";
  return last.text;
}

function blockStrangerUser() {
  const username = state.activeChat.stranger.username;
  if (!state.blockedUsers.includes(username)) {
    state.blockedUsers.push(username);
  }
  showToast(`Blocked user ${state.activeChat.stranger.name}`, "danger");
  exitChatRoom();
}

function submitUserReport(reason) {
  const reportObj = {
    id: `R-${Math.floor(1000 + Math.random() * 9000)}`,
    reportedUser: state.activeChat.stranger.username,
    reporter: state.currentUser.username,
    reason: reason,
    timestamp: new Date().toLocaleTimeString()
  };
  state.reportsList.push(reportObj);
  showToast("Report submitted.", "warning");
  blockStrangerUser();
}

function sendMessageFlow() {
  if (state.isMuted) return;
  const text = dom.chatMessageInput.value.trim();
  if (!text) return;
  
  if (checkSpamRateLimiting()) return;
  const cleanText = filterProfanity(text);
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  appendMessageBubble("self", cleanText, timeStr, "sent");
  dom.chatMessageInput.value = "";
  
  state.activeChat.messages.push({ sender: "self", text: cleanText, time: timeStr });
  
  if (!state.activeChat.isHistoryOnly) {
    triggerStrangerTypingResponse();
  }
}

function sendAttachmentMessage(type, payload) {
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  appendMessageBubble("self", payload, timeStr, "sent", type);
  state.activeChat.messages.push({ sender: "self", text: payload, time: timeStr, attachmentType: type });
  
  if (!state.activeChat.isHistoryOnly) {
    setTimeout(() => {
      showStrangerTyping(true);
      setTimeout(() => {
        showStrangerTyping(false);
        const botResponse = type === "image" ? "Wow beautiful! 😍" : "Awesome!";
        appendMessageBubble("other", botResponse, new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), "read");
        state.activeChat.messages.push({ sender: "other", text: botResponse, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) });
      }, 1500);
    }, 1200);
  }
}

function triggerStrangerTypingResponse() {
  const stranger = state.activeChat.stranger;
  const category = state.activeCategory;
  const idx = state.activeChat.activeDialogIndex;
  
  const dialogues = stranger.dialogues[category];
  if (!dialogues || idx >= dialogues.length) return;
  
  const activeDialog = dialogues[idx];
  
  setTimeout(() => {
    if (!state.activeChat || state.activeChat.stranger.username !== stranger.username) return;
    
    showStrangerTyping(true);
    
    setTimeout(() => {
      if (!state.activeChat || state.activeChat.stranger.username !== stranger.username) return;
      showStrangerTyping(false);
      
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      
      appendMessageBubble("other", activeDialog.text, timeStr, "read");
      state.activeChat.messages.push({ sender: "other", text: activeDialog.text, time: timeStr });
      state.activeChat.activeDialogIndex++;
      
    }, 1800);
  }, activeDialog.delay);
}

function showStrangerTyping(show) {
  if (show) {
    dom.strangerTypingText.innerText = `${state.activeChat.stranger.name} is typing...`;
    dom.strangerTypingRow.classList.remove('hidden');
    scrollToBottom(dom.strangerChatFeed);
  } else {
    dom.strangerTypingRow.classList.add('hidden');
  }
}

function appendMessageBubble(sender, content, time, ticksState = "sent", attachmentType = null) {
  let bubbleInnerHTML = "";
  
  if (attachmentType === 'image') {
    bubbleInnerHTML = `<img src="${content}" class="bubble-attachment-image" alt="Attachment Image">`;
  } else if (attachmentType === 'file') {
    bubbleInnerHTML = `<div class="file-bubble-attachment"><i data-lucide="file-text"></i> <span>${content}</span></div>`;
  } else if (attachmentType === 'location') {
    bubbleInnerHTML = `<div class="location-bubble-attachment"><i data-lucide="map-pin"></i> <span>📍 Location: ${content}</span></div>`;
  } else if (attachmentType === 'contact') {
    bubbleInnerHTML = `<div class="contact-bubble-attachment"><i data-lucide="user-check"></i> <pre>${content}</pre></div>`;
  } else if (attachmentType === 'voice') {
    const vnId = `vn-${Math.floor(Math.random() * 1000)}`;
    bubbleInnerHTML = `
      <div class="voice-note-bubble" id="${vnId}">
        <button class="vn-play-btn" onclick="playVoiceNoteBubble('${vnId}')"><i data-lucide="play" class="vn-play-icon"></i></button>
        <div class="vn-progress-bar">
          <div class="vn-progress-fill" style="width: 0%"></div>
        </div>
        <span class="vn-duration">0:12</span>
      </div>
    `;
  } else {
    bubbleInnerHTML = `<div class="message-text-content">${content}</div>`;
  }

  let ticksHTML = "";
  if (sender === 'self') {
    ticksHTML = ticksState === 'read' ? `<span class="ticks-read"><i data-lucide="check-check"></i></span>` : `<span class="ticks-sent"><i data-lucide="check"></i></span>`;
  }

  const wrapper = document.createElement('div');
  wrapper.className = `msg-bubble-wrapper ${sender === 'self' ? 'sent' : 'received'}`;
  
  let avatarUrl = sender === 'self' ? state.currentUser.avatar : state.activeChat.stranger.avatar;
  const showPhoto = (sender === 'self') ? dom.privacyShowPhoto.checked : true;
  const avatarDisplay = showPhoto ? `<img src="${avatarUrl}" class="msg-bubble-avatar" alt="Avatar">` : `<div class="msg-bubble-avatar anonymous-avatar"><i data-lucide="user"></i></div>`;

  wrapper.innerHTML = `
    ${avatarDisplay}
    <div class="msg-bubble">
      ${bubbleInnerHTML}
      <div class="msg-meta">
        <span>${time}</span>
        ${ticksHTML}
      </div>
    </div>
  `;
  
  dom.strangerChatFeed.appendChild(wrapper);
  scrollToBottom(dom.strangerChatFeed);
  lucide.createIcons();
}

function addSystemMessage(text) {
  const container = document.createElement('div');
  container.className = "system-stripe-msg glass-card";
  container.style.fontSize = "11.5px";
  container.style.color = "var(--text-secondary)";
  container.style.textAlign = "center";
  container.style.padding = "6px 12px";
  container.style.margin = "8px auto";
  container.style.borderRadius = "8px";
  container.style.width = "fit-content";
  container.innerText = text;
  dom.strangerChatFeed.appendChild(container);
  scrollToBottom(dom.strangerChatFeed);
}

function renderThreadsList() {
  dom.messagesThreadsContainer.innerHTML = "";
  const activeTab = document.querySelector('.msg-tab.active').dataset.tab;
  const searchQuery = dom.searchThreadsInput.value.toLowerCase().trim();
  
  let threads = activeTab === 'friends' ? state.savedChats.slice(1, 3) : state.savedChats;
  const filteredThreads = threads.filter(t => t.stranger.name.toLowerCase().includes(searchQuery));
  
  if (filteredThreads.length === 0) {
    dom.messagesThreadsContainer.innerHTML = `<div class="empty-threads-view">No chats found in ${activeTab} chats</div>`;
    return;
  }
  
  filteredThreads.forEach(thread => {
    const card = document.createElement('div');
    card.className = "thread-card";
    const isPremium = thread.category === "Romantic" || thread.category === "Flirty / Horny" || thread.category === "Lesbian";
    const badgeHTML = `<span class="thread-category-badge ${isPremium ? 'premium-cat' : ''}">${thread.category}</span>`;
    const unreadHTML = thread.unreadCount > 0 ? `<span class="unread-badge">${thread.unreadCount}</span>` : "";
    
    card.innerHTML = `
      <img src="${thread.stranger.avatar}" class="thread-avatar" alt="stranger">
      <div class="thread-details">
        <div class="thread-meta-row">
          <div class="thread-name-flex">
            <h4>${thread.stranger.name}</h4>
            ${badgeHTML}
          </div>
          <span class="thread-time">${thread.time}</span>
        </div>
        <div class="thread-msg-row">
          <span class="thread-last-msg">${thread.lastMessage}</span>
          ${unreadHTML}
        </div>
      </div>
    `;
    
    card.addEventListener('click', () => {
      thread.unreadCount = 0;
      state.activeCategory = thread.category;
      enterChatRoom(thread.stranger, true);
    });
    
    dom.messagesThreadsContainer.appendChild(card);
  });
}

function closeActionsDrawer() { dom.chatActionsDrawer.classList.remove('active'); }

function openVoiceRecorderPanel() {
  dom.voiceRecorderOverlay.classList.add('active');
  state.isRecording = true;
  state.recordDuration = 0;
  dom.recordingTimer.innerText = "0:00";
  startAudioWaveformAnimation();
  state.recordInterval = setInterval(() => {
    state.recordDuration++;
    let minutes = Math.floor(state.recordDuration / 60);
    let seconds = state.recordDuration % 60;
    dom.recordingTimer.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }, 1000);
}

function cancelVoiceRecording() {
  stopVoiceTimer();
  dom.voiceRecorderOverlay.classList.remove('active');
  showToast("Voice note deleted", "warning");
}

function stopAndSendVoiceRecording() {
  stopVoiceTimer();
  dom.voiceRecorderOverlay.classList.remove('active');
  sendAttachmentMessage("voice", "Voice Note Placeholder");
}

function stopVoiceTimer() {
  state.isRecording = false;
  clearInterval(state.recordInterval);
}

function startAudioWaveformAnimation() {
  const canvas = dom.waveformCanvas;
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;
  let phase = 0;
  function draw() {
    if (!state.isRecording) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "rgba(168, 85, 247, 0.8)";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    for (let x = 0; x < canvas.width; x++) {
      let y = canvas.height / 2 + Math.sin(x * 0.05 + phase) * 8 * Math.sin(x * 0.005) + Math.cos(x * 0.02 + phase * 2.1) * 4;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    phase += 0.15;
    requestAnimationFrame(draw);
  }
  draw();
}

function openRazorpayModal() { dom.razorpayModal.classList.add('active'); }

function runRazorpayPaymentPipeline() {
  const user = state.currentUser;
  if (!user) {
    showToast("Please log in to purchase premium", "warning");
    return;
  }

  // ==========================================
  // ENTER YOUR RAZORPAY KEY ID HERE:
  // (Starts with 'rzp_test_' or 'rzp_live_')
  // ==========================================
  const RAZORPAY_KEY_ID = "rzp_live_SumscUMghG0QZr"; 

  if (RAZORPAY_KEY_ID === "YOUR_RAZORPAY_KEY_ID") {
    showToast("Please edit app.js to add your Razorpay Key ID", "warning");
    runSimulatedRazorpayPayment();
    return;
  }

  const options = {
    key: RAZORPAY_KEY_ID,
    amount: 49900, // ₹499.00 in paise
    currency: "INR",
    name: "MeloChat Premium",
    description: "Unlock premium stranger chat categories",
    image: user.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    prefill: {
      name: user.name,
      email: `${user.username}@melochat.local`
    },
    theme: {
      color: "#a855f7"
    },
    handler: function (response) {
      handleRazorpayPaymentSuccess(response.razorpay_payment_id);
    },
    modal: {
      ondismiss: function () {
        showToast("Payment window closed", "warning");
      }
    }
  };

  try {
    const rzp = new Razorpay(options);
    dom.razorpayModal.classList.remove('active');
    rzp.open();
  } catch (err) {
    console.error("Razorpay error: ", err);
    showToast("Error launching Razorpay Checkout", "danger");
  }
}

function runSimulatedRazorpayPayment() {
  dom.paymentLoader.classList.remove('hidden');
  dom.paymentLoaderStatus.innerText = "Connecting to Merchant Servers...";
  setTimeout(() => {
    dom.paymentLoaderStatus.innerText = "Authorizing transaction...";
    setTimeout(() => {
      dom.paymentLoader.classList.add('hidden');
      dom.razorpayModal.classList.remove('active');
      handleRazorpayPaymentSuccess("pay_SIMULATED_12345");
    }, 1800);
  }, 1200);
}

function handleRazorpayPaymentSuccess(paymentId) {
  state.subscriptionActive = true;
  state.subscriptionExpiry = new Date().getTime() + (30 * 24 * 60 * 60 * 1000);
  
  if (state.currentUser) {
    state.currentUser.subscriptionActive = true;
    state.currentUser.subscriptionExpiry = state.subscriptionExpiry;
    localStorage.setItem('melochat_user', JSON.stringify(state.currentUser));
    
    const registry = JSON.parse(localStorage.getItem('melochat_accounts_registry') || "{}");
    const matchedGoogleMail = Object.keys(registry).find(mail => registry[mail].username === state.currentUser.username);
    if (matchedGoogleMail) {
      registry[matchedGoogleMail] = state.currentUser;
      localStorage.setItem('melochat_accounts_registry', JSON.stringify(registry));
    }
  }
  
  updateProfileUI();
  
  dom.chatTypeCards.forEach(c => {
    if (c.dataset.category === state.activeCategory) {
      dom.chatTypeCards.forEach(card => card.classList.remove('active'));
      c.classList.add('active');
    }
  });
  
  showToast(`Subscription successful! Payment ID: ${paymentId}`, "success");
}

function showToast(message, type = "info") {
  let icon = "info";
  if (type === 'success') icon = "check-circle";
  if (type === 'warning') icon = "alert-triangle";
  if (type === 'danger') icon = "alert-octagon";
  const toast = document.createElement('div');
  toast.className = `toast-item toast-border-${type}`;
  toast.innerHTML = `<span class="toast-icon-${type}"><i data-lucide="${icon}"></i></span><span>${message}</span>`;
  dom.toastContainer.appendChild(toast);
  lucide.createIcons();
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px) translateX(-50%)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function checkSpamRateLimiting() {
  const now = Date.now();
  state.lastMessageTimes.push(now);
  if (state.lastMessageTimes.length > 5) state.lastMessageTimes.shift();
  if (state.lastMessageTimes.length === 5) {
    const timeDiff = state.lastMessageTimes[4] - state.lastMessageTimes[0];
    if (timeDiff < 3000) {
      state.isMuted = true;
      showToast("Spam alert! Muted for 5 seconds.", "danger");
      dom.chatSendBtn.disabled = true;
      dom.chatSendBtn.style.opacity = "0.3";
      setTimeout(() => {
        state.isMuted = false;
        dom.chatSendBtn.disabled = false;
        dom.chatSendBtn.style.opacity = "1";
        showToast("Sending privileges restored.", "success");
      }, 5000);
      return true;
    }
  }
  return false;
}

function filterProfanity(text) {
  let words = text.split(/\s+/);
  let cleanWords = words.map(w => {
    let lower = w.toLowerCase().replace(/[^a-z]/g, "");
    if (PROFANITY_LIST.includes(lower)) return "*".repeat(w.length);
    return w;
  });
  return cleanWords.join(" ");
}

function renderAdminPanel() {
  dom.adminStatUsers.innerText = state.onlineUsersCount.toLocaleString();
  dom.adminStatMatches.innerText = Math.floor(state.onlineUsersCount / 3.6).toString();
  const rev = Math.floor(state.onlineUsersCount * 0.28) * 499;
  dom.adminStatRevenue.innerText = `₹${rev.toLocaleString()}`;
  dom.adminStatBanned.innerText = state.bannedUsers.length;
  dom.bannedUsersTagsContainer.innerHTML = state.bannedUsers.map(u => `<span class="banned-user-tag">@${u}</span>`).join('');
  
  if (state.reportsList.length === 0) {
    dom.adminReportsList.innerHTML = `<div class="empty-reports-panel">No active reports.</div>`;
  } else {
    dom.adminReportsList.innerHTML = state.reportsList.map(rep => `
      <div class="report-list-item">
        <div class="report-reporter-info">
          <span class="report-user-bold">Report: @${rep.reportedUser}</span>
          <span class="report-reason">by @${rep.reporter}: "${rep.reason}"</span>
        </div>
        <div class="report-action-btn-row">
          <button class="admin-btn-action ban-action" onclick="adminBanReportedUser('${rep.reportedUser}', '${rep.id}')">Ban</button>
          <button class="admin-btn-action resolve-action" onclick="adminDismissReport('${rep.id}')">Resolve</button>
        </div>
      </div>
    `).join('');
  }
  renderSpyMatchesList();
}

window.adminBanReportedUser = function(username, reportId) {
  if (!state.bannedUsers.includes(username)) state.bannedUsers.push(username);
  state.reportsList = state.reportsList.filter(r => r.id !== reportId);
  showToast(`Banned user @${username}`, "danger");
  renderAdminPanel();
};

window.adminDismissReport = function(reportId) {
  state.reportsList = state.reportsList.filter(r => r.id !== reportId);
  showToast("Report resolved & dismissed", "success");
  renderAdminPanel();
};

const SIMULATED_LIVE_CHATS = [
  { id: "S-1", p1: "Dev", p2: "Riya", cat: "Fun Chat", messages: [
    { sender: "Dev", text: "Hey! Truth or Dare?" },
    { sender: "Riya", text: "Truth!" }
  ]},
  { id: "S-2", p1: "Rohan", p2: "Aisha", cat: "Romantic", messages: [
    { sender: "Rohan", text: "What do you like to do in free time?" },
    { sender: "Aisha", text: "I love music and travelling ✈️" }
  ]}
];

function renderSpyMatchesList() {
  dom.adminSpyMatchList.innerHTML = SIMULATED_LIVE_CHATS.map(match => `
    <div class="live-spy-item" onclick="openSpyChatIntercept('${match.id}')">
      <div class="spy-match-info">
        <i data-lucide="eye" class="text-gradient"></i>
        <span>${match.p1} & ${match.p2}</span>
        <span class="spy-match-category">${match.cat}</span>
      </div>
      <span class="spy-match-active-status"><span class="pulse-dot"></span> Active</span>
    </div>
  `).join('');
  lucide.createIcons();
}

window.openSpyChatIntercept = function(spyId) {
  const match = SIMULATED_LIVE_CHATS.find(m => m.id === spyId);
  if (!match) return;
  dom.spyP1.innerText = match.p1;
  dom.spyP2.innerText = match.p2;
  dom.adminSpyMessages.innerHTML = match.messages.map(msg => `
    <div class="spy-msg"><span class="spy-msg-sender" style="color: ${msg.sender === match.p1 ? '#c084fc' : '#60a5fa'}">${msg.sender}:</span><span>${msg.text}</span></div>
  `).join('');
  dom.adminSpyChatPanel.classList.remove('hidden');
};

function startSimulationLoops() {
  setInterval(() => {
    state.onlineUsersCount += Math.floor(Math.random() * 11) - 5;
    if (dom.activeUserCount) dom.activeUserCount.innerText = `${state.onlineUsersCount.toLocaleString()}+ people online`;
  }, 6000);
  
  setInterval(() => {
    const randomMatch = SIMULATED_LIVE_CHATS[Math.floor(Math.random() * SIMULATED_LIVE_CHATS.length)];
    const sender = Math.random() > 0.5 ? randomMatch.p1 : randomMatch.p2;
    const texts = ["Haha totally!", "Wow that is cool", "I don't agree tbh", "What are your plans?", "That's crazy 😂"];
    randomMatch.messages.push({ sender: sender, text: texts[Math.floor(Math.random() * texts.length)] });
    if (randomMatch.messages.length > 6) randomMatch.messages.shift();
    if (state.activeScreen === 'screen-admin') {
      if (!dom.adminSpyChatPanel.classList.contains('hidden') && dom.spyP1.innerText === randomMatch.p1) {
        openSpyChatIntercept(randomMatch.id);
      }
    }
  }, 7500);
}

function scrollToBottom(element) { element.scrollTop = element.scrollHeight; }

function getInitialMockChats() {
  return [
    {
      stranger: { name: "Aisha", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150", bio: "Love art & books", state: "Kerala", district: "Kochi", country: "India", coords: [9.9312, 76.2673] },
      category: "Romantic",
      time: "10:45 PM",
      lastMessage: "It's been amazing talking to you...",
      unreadCount: 0,
      messages: [
        { sender: "other", text: "Heyy 💖", time: "10:30 PM" },
        { sender: "self", text: "Hii there 😊", time: "10:30 PM" },
        { sender: "other", text: "How's your day going?", time: "10:31 PM" },
        { sender: "self", text: "Pretty good! How about you?", time: "10:31 PM" },
        { sender: "other", text: "It's been amazing so far 😍", time: "10:32 PM" },
        { sender: "other", text: "What do you like to do in free time?", time: "10:32 PM" },
        { sender: "self", text: "I love listening to music and travelling ✈️", time: "10:33 PM" }
      ]
    }
  ];
}
