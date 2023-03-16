
const TransactionList = ({ transactions }) => {
  return (
    <div>
        <h3 style={{marginRight: '10%'}}>Transactions</h3>
        {transactions.map((item, i) => {
          return (
            <div key={i}>
              <p>
                {item.time} - {item.expense} - {item.type}
              </p>
            </div>
          );
        })}
      </div>
  );
}

export default TransactionList