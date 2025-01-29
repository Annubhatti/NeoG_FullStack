import { createStore } from "redux";
import profileReducer from "./profileReducer.js";
import { addProfile, removeProfile, calculateAverageAge } from "./action.js";

// ✅ Create Redux Store with DevTools Support
const store = createStore(
    profileReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// ✅ Subscribe to store updates
store.subscribe(() => {
    console.log(store.getState());
    updateAverageAge();
});

// ✅ Select UI Elements
const profilesList = document.querySelector("#profilesList");
const addProfileBtn = document.querySelector("#addProfileBtn");
const removeProfileBtn = document.querySelector("#removeProfileBtn");
const avgAge = document.querySelector("#avgAge");

// ✅ Add Profile Handler
const addProfileHandler = () => {
    const AddId = document.querySelector("#AddId");
    const name = document.querySelector("#name");
    const age = document.querySelector("#age");

    if (!AddId.value || !name.value || !age.value) {
        alert("Please enter valid profile details.");
        return;
    }

    const newProfile = {
        id: Number(AddId.value),
        name: name.value.trim(),
        age: Number(age.value),
    };

    // ✅ Dispatch action to add profile
    store.dispatch(addProfile(newProfile));

    // ✅ Dispatch action to calculate average age
    store.dispatch(calculateAverageAge());

    // ✅ Re-render profiles
    renderProfiles();
};

// ✅ Remove Profile Handler
const removeProfileHandler = () => {
    const removeId = document.querySelector("#removeId");

    if (!removeId.value) {
        alert("Please enter a valid profile ID to remove.");
        return;
    }

    store.dispatch(removeProfile(Number(removeId.value)));

    store.dispatch(calculateAverageAge());

    renderProfiles();
};

// ✅ Event Listeners
addProfileBtn.addEventListener("click", addProfileHandler);
removeProfileBtn.addEventListener("click", removeProfileHandler);

// ✅ Function to Render Profiles
const renderProfiles = () => {
    const state = store.getState();

    // ✅ Clear the list first
    profilesList.innerHTML = "";

    if (state.profiles.length > 0) {
        profilesList.innerHTML = state.profiles
            .map(
                (profile) => `<li key="${profile.id}">${profile.id} . ${profile.name} (${profile.age} years old.)</li>`
            )
            .join("");
    }
};

// ✅ Function to Update Average Age
const updateAverageAge = () => {
    const state = store.getState();
    avgAge.textContent = `Average Age: ${state.averageAge || 0}`;
};

// ✅ Initial Render
renderProfiles();
updateAverageAge();
