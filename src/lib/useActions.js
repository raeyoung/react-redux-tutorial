import { bindActionCreator } from 'redux';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

export default function useAction(actions, deps) {
  const dispatch = useDispatch();
  return useMemo(
    () => {
      if (Array.isArray(actions)) {
        return actions.map(a => bindActionCreator(a, dispatch));
      }
      return bindActionCreator(actions, dispatch);
    },
    deps ? [dispatch, ...deps] : deps
  );
}