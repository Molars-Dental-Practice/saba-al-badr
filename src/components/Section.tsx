

const TransactionSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 max-w-md mx-auto">
      {/* Success Badge Image */}
      <img
        src="/success-badge.png"
        alt="Successful"
        className="h-10 w-auto mb-3"
      />

      {/* Transaction Title Image */}
      <img
        src="/transaction-title.png"
        alt="Transaction"
        className="h-14 w-auto mb-5"
      />

      {/* Amount Image */}
      <img
        src="/transaction-amount.png"
        alt="$25,000"
        className="h-20 w-auto my-4"
      />

      {/* Recipient Image */}
      <img
        src="/transaction-recipient.png"
        alt="Sent to Jack"
        className="h-12 w-auto mt-3"
      />
    </div>
  );
};

export default TransactionSuccess;
