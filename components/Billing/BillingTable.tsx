import React from 'react'

  

const BillingTable = () => {
  return (
    <table className="w-full border border-gray-200">
    <thead>
      <tr className="bg-gray-100">
        <th className="border px-4 py-2">First Name</th>
        <th className="border px-4 py-2">Last Name</th>
        <th className="border px-4 py-2">Email</th>
        <th className="border px-4 py-2">Date</th>
        <th className="border px-4 py-2">Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr className="text-center">
        <td className="border px-4 py-2">John</td>
        <td className="border px-4 py-2">Doe</td>
        <td className="border px-4 py-2">john@example.com</td>
        <td className="border px-4 py-2">2024-01-29</td>
        <td className="border px-4 py-2">
          <input
            type="number"
            className="border p-1 w-20 text-center"
            placeholder="Enter Amount"
          />
        </td>
      </tr>
    </tbody>
  </table>
  

  )
}

export default BillingTable