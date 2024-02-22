'use client'

import { useFormStatus } from "react-dom";

export default function AddProductsButton() {

  const {pending} = useFormStatus()

  return (
    <button
      type="submit"
      className="m-2 border-solid border-gray-500 rounded-sm p-1 bg-slate-800"
    >
      {pending ? 'Carregando..' : 'Criar Produto'}
    </button>
  );
}
