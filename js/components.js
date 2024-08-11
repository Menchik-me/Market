class ItemCard extends HTMLElement {
    constructor(name, image, price) {
        super();
        this.name = name;
        this.image = image;
        this.price = price;
    }

    connectedCallback() {
        this.innerHTML = `<div id="name">${this.name}</div>
        <img id="item-picture" src="${this.image}"/>
        <div class="options">
            <button id="price">Цена: ${this.price}</button>
            <button id="add">Добавить в корзину</button>
        </div>`;
    }

    changePrice(newPrice) {
        this.price = newPrice;
        this.querySelector("#price").innerHTML = `Цена: ${newPrice}`;
    }
}
customElements.define("item-card", ItemCard);