import React from 'react'

export default function Table() {
  return (
    <div className='p-6'>
       <div className="overflow-x-auto border border-black-100 p-4">
  <table className="min-w-full bg-white">
    <thead>
      <tr>
        <th className="py-2 px-4 border-b-2 border-gray-300">S/N</th>
        <th className="py-2 px-4 border-b-2 border-gray-300">Organization Name</th>
        <th className="py-2 px-4 border-b-2 border-gray-300">Phone Number</th>
        <th className="py-2 px-4 border-b-2 border-gray-300">Email Address</th>
        <th className="py-2 px-4 border-b-2 border-gray-300">Full Address</th>
        <th className="py-2 px-4 border-b-2 border-gray-300">Open</th>
        <th className="py-2 px-4 border-b-2 border-gray-300">Cost of Vaccine</th>
        <th className="py-2 px-4 border-b-2 border-gray-300">Location Name</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th className='className="py-2 px-4 border-b-2 border-gray-300"'>1.</th>
        <td className="py-2 px-4 border-b border-gray-300">ExCare Health Services </td>
        <td className="py-2 px-4 border-b border-gray-300">08092223648</td>
        <td className="py-2 px-4 border-b border-gray-300">Admin@excareng.com</td>
        <td className="py-2 px-4 border-b border-gray-300">7 Channels TV avenue OPIC Isheri Estate</td>
        <td className="py-2 px-4 border-b border-gray-300">Monday-Sunday 8am-7pm</td>
        <td className="py-2 px-4 border-b border-gray-300">Shanchol: 16,000 per dose. Euvichol-Plus 13,000 per dose</td>
        <td className="py-2 px-4 border-b border-gray-300">ExCare Health Services OPIC Isheri Estate, ExC Pharmacy stores</td>
      </tr>
      <tr>
        <th className="py-2 px-4 border-b-2 border-gray-300">2.</th>
        <td className="py-2 px-4 border-b border-gray-300">ExCare Health Service</td>
        <td className="py-2 px-4 border-b border-gray-300"></td>
        <td className="py-2 px-4 border-b border-gray-300">Admin@excareng.com</td>
        <td className="py-2 px-4 border-b border-gray-300">ExC Pharmacy  6B Francis Ojei Chevron Alternative</td>
        <td className="py-2 px-4 border-b border-gray-300">Monday-Sunday 8am-7pm </td>
        <td className="py-2 px-4 border-b border-gray-300"></td>
        <td className="py-2 px-4 border-b border-gray-300">ExC Pharmacy</td>
      </tr>
      
    </tbody>
  </table>
</div>
 
    </div>
  )
}
