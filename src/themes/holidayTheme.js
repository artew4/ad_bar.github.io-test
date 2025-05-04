export const getCurrentHoliday = () => {
    const today = new Date();
    if (today.getMonth() === 4 && today.getDate() === 9) {
      return 'victory-day';
    }
    return null;
  };
  