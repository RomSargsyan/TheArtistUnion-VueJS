export const state = () => {
  return {
    users: [
      { name: 'Rocksted' },
      { name: 'jeyjeysax' },
      { name: 'Guilherme Guerreros' },
      { name: 'Diamn' },
      { name: 'CDeep Music' },
      { name: 'Snøwmass' },
      { name: 'Syzo' },
      { name: 'J.u.D.' },
      { name: 'Mark Ingham' },
      { name: 'SoCloseToToast' },
    ],
  };
};

export const getters = {
  data: (state) => state.users,
}
