const React = require("react");
const ReactNativeScript = require("react-nativescript");

function CardItem({ card, onPress }) {
    const { cardNumber, cardName, monthlyLimit, balance, isActive, expiryDate } = card;
    
    return (
        <flexboxLayout 
            className={`m-2 rounded-lg p-4 ${isActive ? 'bg-gradient-to-r from-blue-500 to-blue-700' : 'bg-gray-400'}`}
            onTap={() => onPress(card)}
        >
            <flexboxLayout className="justify-between">
                <label className="text-lg font-bold text-white">{cardName}</label>
                <label className={`text-sm ${isActive ? 'text-green-300' : 'text-red-300'}`}>
                    {isActive ? 'Active' : 'Inactive'}
                </label>
            </flexboxLayout>
            
            <label className="text-xl text-white mt-4">
                •••• •••• •••• {cardNumber.toString().slice(-4)}
            </label>
            
            <flexboxLayout className="justify-between mt-4">
                <stackLayout>
                    <label className="text-xs text-gray-200">Monthly Limit</label>
                    <label className="text-sm text-white">${monthlyLimit}</label>
                </stackLayout>
                
                <stackLayout>
                    <label className="text-xs text-gray-200">Available Balance</label>
                    <label className="text-sm text-white">${balance}</label>
                </stackLayout>
                
                <stackLayout>
                    <label className="text-xs text-gray-200">Expires</label>
                    <label className="text-sm text-white">{expiryDate}</label>
                </stackLayout>
            </flexboxLayout>
        </flexboxLayout>
    );
}

module.exports = CardItem;