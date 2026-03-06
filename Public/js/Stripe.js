#conv-layout-customer {
    overflow: auto;
}

.customer-extra {
    margin-top: 10px;
}
.customer-data {
    padding: 0;
}
.stripe-container {
    padding: 5px 2px 5px 0;
    font-family: "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI",
        "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif",
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
        "Noto Color Emoji";
}

.stripe-heading .stripe-title h4 {
    color: #2a3b47;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
}
.stripe-container .stripe-product input {
    position: absolute;
    opacity: 0;
    z-index: -1;
}

.stripe-container .stripe-product .tabs {
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 2px 2px -1px rgba(238, 238, 234, 0.1);
}
.stripe-container .stripe-product .tab {
    width: 100%;
    color: #000;
    overflow: hidden;
}

.stripe-container .stripe-product .tab-label {
    display: flex;
    justify-content: space-between;
    padding: 1em;
    background: rgb(236, 237, 239);
    font-weight: bold;
    cursor: pointer;
    margin: 0px;
    text-transform: capitalize;
    font-size: 12px;
}
.stripe-container .stripe-product .tab-label:hover {
    background: #d7d6d6;
}
.stripe-container .stripe-product .tab-label::after {
    content: "\276F";
