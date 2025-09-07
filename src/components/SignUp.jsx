import { useState } from 'react';

   export default function SignUp({ onClose }) {
     const [formData, setFormData] = useState({
       fullName: '',
       email: '',
       password: '',
       confirmPassword: '',
       agreeTerms: false,
     });

     const handleChange = (e) => {
       const { name, value, type, checked } = e.target;
       setFormData((prev) => ({
         ...prev,
         [name]: type === 'checkbox' ? checked : value,
       }));
     };

     const handleSubmit = () => {
       // Placeholder for form submission logic
       console.log('Sign Up submitted:', formData);
       onClose();
     };

     return (
       <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
         <div className="bg-white rounded-lg max-w-md w-full p-6 relative shadow-lg">
           <div className="flex justify-between items-center mb-6">
             <h2 className="text-2xl font-bold">Sign Up</h2>
             <button onClick={onClose} className="text-2xl font-bold hover:text-gray-700" aria-label="Close">
               &times;
             </button>
           </div>
           <section className="mb-6">
             <label className="block mb-2 font-semibold">Full Name</label>
             <input
               type="text"
               name="fullName"
               value={formData.fullName}
               onChange={handleChange}
               className="border rounded px-2 py-1 w-full bg-gray-100"
               placeholder="Enter your full name"
             />
           </section>
           <section className="mb-6">
             <label className="block mb-2 font-semibold">Email</label>
             <input
               type="email"
               name="email"
               value={formData.email}
               onChange={handleChange}
               className="border rounded px-2 py-1 w-full bg-gray-100"
               placeholder="Enter your email"
             />
           </section>
           <section className="mb-6">
             <label className="block mb-2 font-semibold">Password</label>
             <input
               type="password"
               name="password"
               value={formData.password}
               onChange={handleChange}
               className="border rounded px-2 py-1 w-full bg-gray-100"
               placeholder="Enter your password"
             />
           </section>
           <section className="mb-6">
             <label className="block mb-2 font-semibold">Confirm Password</label>
             <input
               type="password"
               name="confirmPassword"
               value={formData.confirmPassword}
               onChange={handleChange}
               className="border rounded px-2 py-1 w-full bg-gray-100"
               placeholder="Confirm your password"
             />
           </section>
           <section className="mb-6 flex items-center">
             <input
               type="checkbox"
               name="agreeTerms"
               checked={formData.agreeTerms}
               onChange={handleChange}
               className="form-checkbox text-blue-600 mr-2"
             />
             <label className="text-sm">I agree to the <a href="#" className="text-blue-500 hover:underline">Terms & Conditions</a></label>
           </section>
           <div className="flex justify-end space-x-4">
             <button onClick={onClose} className="bg-gray-300 text-gray-800 rounded-lg px-6 py-2 hover:bg-gray-400">
               Cancel
             </button>
             <button onClick={handleSubmit} className="bg-blue-600 text-white rounded-lg px-6 py-2 hover:bg-blue-700">
               Register
             </button>
           </div>
         </div>
       </div>
     );
   }