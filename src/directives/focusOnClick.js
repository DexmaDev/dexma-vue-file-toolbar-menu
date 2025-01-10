export default {
    mounted(el) {
        el.addEventListener("click", (event) => {
            if (
                ["INPUT", "TEXTAREA", "SELECT"].includes(event.target.tagName) ||
                event.target.isContentEditable
            ) {
                event.target.focus();
            }
        });
    },
    beforeUnmount(el) {
        el.removeEventListener("click", () => {});
    },
};
