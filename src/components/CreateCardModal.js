const React = require("react");
const ReactNativeScript = require("react-nativescript");
const { Dialogs } = require("@nativescript/core");

function CreateCardModal({ isVisible, onClose, onCreateCard }) {
    const [cardName, setCardName] = React.useState("");
    const [monthlyLimit, setMonthlyLimit] = React.useState("");

    const handleCreate = () => {
        if (!cardName || !monthlyLimit) {
            Dialogs.alert("Please fill in all fields");
            return;
        }

        onCreateCard({
            cardName,
            monthlyLimit: parseFloat(monthlyLimit)
        });
        
        setCardName("");
        setMonthlyLimit("");
        onClose();
    };

    if (!isVisible) return null;

    return (
        <flexboxLayout className="absolute inset-0 bg-black bg-opacity-50 justify-center items-center">
            <flexboxLayout className="bg-white rounded-lg p-4 w-4/5">
                <label className="text-xl font-bold mb-4">Create New Card</label>
                
                <stackLayout className="mb-4">
                    <label className="text-sm text-gray-600">Card Name</label>
                    <textField
                        className="border rounded p-2"
                        value={cardName}
                        onTextChange={(e) => setCardName(e.value)}
                        hint="Enter card name"
                    />
                </stackLayout>
                
                <stackLayout className="mb-4">
                    <label className="text-sm text-gray-600">Monthly Limit ($)</label>
                    <textField
                        className="border rounded p-2"
                        value={monthlyLimit}
                        keyboardType="number"
                        onTextChange={(e) => setMonthlyLimit(e.value)}
                        hint="Enter monthly limit"
                    />
                </stackLayout>
                
                <flexboxLayout className="justify-end mt-4">
                    <button
                        className="bg-gray-300 text-gray-700 p-2 rounded mr-2"
                        onTap={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-blue-600 text-white p-2 rounded"
                        onTap={handleCreate}
                    >
                        Create Card
                    </button>
                </flexboxLayout>
            </flexboxLayout>
        </flexboxLayout>
    );
}

module.exports = CreateCardModal;