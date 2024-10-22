const React = require("react");

// Simulated card service
class CardService {
    constructor() {
        this.cards = [];
    }

    generateCardNumber() {
        return Math.floor(Math.random() * 9000000000000000) + 1000000000000000;
    }

    generateCVV() {
        return Math.floor(Math.random() * 900) + 100;
    }

    createCard(cardName, monthlyLimit) {
        const card = {
            id: Date.now(),
            cardNumber: this.generateCardNumber(),
            cvv: this.generateCVV(),
            cardName,
            monthlyLimit,
            balance: monthlyLimit,
            isActive: true,
            expiryDate: new Date(Date.now() + 31536000000).toLocaleDateString(), // 1 year from now
            transactions: []
        };
        this.cards.push(card);
        return card;
    }

    deactivateCard(cardId) {
        const card = this.cards.find(c => c.id === cardId);
        if (card) {
            card.isActive = false;
            return true;
        }
        return false;
    }
}

module.exports = new CardService();