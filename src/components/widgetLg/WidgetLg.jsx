import './widgetLg.css'

export default function WidgetLg() {

  const Button = ({ type }) => {
    return <button className={"widgetLgButton "+ type}>{type}</button>;
  };
    
  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">Latest Transaction</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg" alt="Lg_UserImg" className="widgetLgImg" />
            <span className="widgetLgName">Jayanth kumar</span>
          </td>
          <td className="widgetLgDate">5 Oct 2023</td>
          <td className="widgetLgAmount">Rs 4999</td>
          <td className="widgetLgStatus"> <Button type="Approved"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg" alt="Lg_UserImg" className="widgetLgImg" />
            <span className="widgetLgName">Jayanth kumar</span>
          </td>
          <td className="widgetLgDate">5 Oct 2023</td>
          <td className="widgetLgAmount">Rs 4999</td>
          <td className="widgetLgStatus"> <Button type="Declined"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg" alt="Lg_UserImg" className="widgetLgImg" />
            <span className="widgetLgName">Jayanth kumar</span>
          </td>
          <td className="widgetLgDate">5 Oct 2023</td>
          <td className="widgetLgAmount">Rs 4999</td>
          <td className="widgetLgStatus"> <Button type="Pending"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg" alt="Lg_UserImg" className="widgetLgImg" />
            <span className="widgetLgName">Jayanth kumar</span>
          </td>
          <td className="widgetLgDate">5 Oct 2023</td>
          <td className="widgetLgAmount">Rs 4999</td>
          <td className="widgetLgStatus"> <Button type="Approved"/></td>
        </tr>
        
      </table>
    </div>
  )
}
