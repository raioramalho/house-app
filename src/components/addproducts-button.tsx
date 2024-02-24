'use client'

import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import { useEffect } from "react";
import { useFormStatus } from "react-dom";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Spinner from "./spinner";

export default function AddProductsButton() {

  const { pending, data } = useFormStatus()

  return (
    <Button type="submit">
      {pending ? <Spinner/> : "Criar Produto"}
    </Button>
  );
}
