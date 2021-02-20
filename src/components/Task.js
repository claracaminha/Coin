
let imgs = [
    "https://www.coindesk.com/wp-content/uploads/2014/04/blogo.png",
    "https://s2.coinmarketcap.com/static/img/coins/200x200/1831.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png",
    "https://s3.cointelegraph.com/storage/uploads/view/a6da22554d20dd7c5884347b01727a12.png",
    "https://waytomine.com/wp-content/uploads/2018/03/LiteCoin-200x200.gif",
    "https://upload.wikimedia.org/wikipedia/commons/5/56/Stellar_Symbol.png"

  ];

  function Notification(task) {
    switch (task.assetId) {
      case "BTC":
        return 0;
      case "ETH":
        return 1;
      case "LTC":
        return 2;
      case "LINK":
       return 3;
      case "BCH":
       return 4;
       case "XLM":
       return 5;
      
    }
  }


const Task = ({task}) => {
  

  return (
    <tr key={task.assetId}>
        <td><img src = {imgs[Notification(task=task)]} height="20" width="20"/> {task.assetName}</td>
        <td>${task.currentPrice}</td>
        <td>${task.currentMarketCap}</td>
        <td>{task.supply} {task.assetId}</td>
    </tr>
  )
}

export default Task
