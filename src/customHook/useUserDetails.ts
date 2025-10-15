import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeTheData } from "../storeManagement/slices/userDetailsSlice";
import type { UserDetailDataModel } from "../dataModel/userDetailDataModel";

const DATA_URL = new URL(
  "../assets/userDetails.json",
  import.meta.url
).toString();

export function useUserDetails() {
  const dispatch = useDispatch();
  const userDetails = useSelector(
    (state: UserDetailDataModel) => state.userData.userDetail
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const fetchUserDetails = useCallback(() => {
    setLoading(true);
    setError(null);
    fetch(DATA_URL)
      .then((r) => {
        if (!r.ok) throw new Error("Network error");
        return r.json();
      })
      .then((data) => {
        dispatch(storeTheData(data));
        localStorage.setItem("userDetails", JSON.stringify(data));
      })
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, [dispatch]);

  useEffect(() => {
    if (!userDetails.length) {
      const cached = localStorage.getItem("userDetails");
      if (cached) {
        dispatch(storeTheData(JSON.parse(cached)));
      } else {
        fetchUserDetails();
      }
    }
  }, [userDetails.length, dispatch, fetchUserDetails]);

  return {
    userDetails,
    loading,
    error,
    reloadUserDetails: fetchUserDetails,
  };
}
