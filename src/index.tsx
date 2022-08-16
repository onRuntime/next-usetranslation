import { useRouter } from "next/router";

const useTranslation = () => {
  const router = useRouter();
  const { locale } = router;
  return { locale };
};

export default useTranslation;
