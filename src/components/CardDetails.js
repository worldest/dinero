const React = require("react");
const ReactNativeScript = require("react-nativescript");
const { Dialogs } = require("@nativescript/core");

function CardDetails({ card, onClose, onDeactivate }) {
    const showCardInfo = () => {
        Dialogs.alert({
            title: "Card Information",
            message: `Card Number: ${card.cardNumber}\nCVV: ${card.cvv}`,
            okButtonText: "Close"
        });
    };

    return (
        <flexboxLayout className="absolute inset-0 bg-black bg-opacity-50 justify-center items-center">
            <flexboxLayout className="bg-white rounded-lg p-4 w-4/5">
                <label className="text-xl font-bold mb-4">{card.cardName}</label>
                
                <stackLayout className="mb-4">
                    <label className="text-sm text-gray-600">Status</label>
                    <label className={`text-base ${card.isActive ? 'text-green-600' : 'text-red-600'}`}>
                        {card.isActive ? 'Active' : 'Inactive'}
                    </label>
                </stackLayout>
                
                <stackLayout className="mb-4">
                    <label className="text-sm text-gray-600">Monthly Limit</label>
                    <label className="text-base">${card.monthlyLimit}</label>
                </stackLayout>
                
                <stackLayout className="mb-4">
                    <label className="text-sm text-gray-600">Available Balance</label>
                    <label className="text-base">${card.balance}</label>
                </stackLayout>
                
                <button
                    className="bg-blue-600 text-white p-2 rounded mb-2"
                    onTap={showCardInfo}
                >
                    Show Card Details
                </button>
                
                {card.isActive && (
                    <button
                        className="bg-red-600 text-white p-2 rounded mb-2"
                        onTap={() => onDeactivate(card.id)}
                    >
                        Deactivate Card
                    </button>
                )}
                
                <button
                    className="bg-gray-300 text-gray-700 p-2 rounded"
                    onTap={onClose}
                >
                    Close
                </button>
            </flexboxLayout>
        </flexboxLayout>
    );
}

module.exports = CardDetails;