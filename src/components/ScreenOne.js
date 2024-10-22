const React = require("react");
const ReactNativeScript = require("react-nativescript");
const { Dialogs } = require("@nativescript/core");
const CardItem = require("./CardItem");
const CreateCardModal = require("./CreateCardModal");
const CardDetails = require("./CardDetails");
const cardService = require("../services/cardService");

function ScreenOne({ navigation }) {
    const [cards, setCards] = React.useState([]);
    const [showCreateModal, setShowCreateModal] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);

    const handleCreateCard = (cardData) => {
        const newCard = cardService.createCard(cardData.cardName, cardData.monthlyLimit);
        setCards([...cards, newCard]);
        Dialogs.alert({
            title: "Success",
            message: "Virtual card created successfully!",
            okButtonText: "OK"
        });
    };

    const handleDeactivateCard = (cardId) => {
        Dialogs.confirm({
            title: "Deactivate Card",
            message: "Are you sure you want to deactivate this card?",
            okButtonText: "Yes",
            cancelButtonText: "No"
        }).then(result => {
            if (result) {
                cardService.deactivateCard(cardId);
                setCards(cards.map(card => 
                    card.id === cardId ? { ...card, isActive: false } : card
                ));
                setSelectedCard(null);
                Dialogs.alert("Card deactivated successfully");
            }
        });
    };

    return (
        <flexboxLayout className="h-full bg-gray-100">
            <flexboxLayout className="p-4 bg-blue-600">
                <label className="text-2xl font-bold text-white">Virtual Cards</label>
            </flexboxLayout>
            
            {cards.length === 0 ? (
                <flexboxLayout className="flex-grow justify-center items-center">
                    <label className="text-gray-500 text-center">
                        No virtual cards yet.{'\n'}Create one to get started!
                    </label>
                </flexboxLayout>
            ) : (
                <scrollView className="flex-grow">
                    <stackLayout>
                        {cards.map(card => (
                            <CardItem
                                key={card.id}
                                card={card}
                                onPress={setSelectedCard}
                            />
                        ))}
                    </stackLayout>
                </scrollView>
            )}

            <button
                className="bg-blue-600 text-white p-4 m-4 rounded-lg text-center"
                onTap={() => setShowCreateModal(true)}
            >
                Create New Card
            </button>

            <CreateCardModal
                isVisible={showCreateModal}
                onClose={() => setShowCreateModal(false)}
                onCreateCard={handleCreateCard}
            />

            {selectedCard && (
                <CardDetails
                    card={selectedCard}
                    onClose={() => setSelectedCard(null)}
                    onDeactivate={handleDeactivateCard}
                />
            )}
        </flexboxLayout>
    );
}

module.exports = ScreenOne;