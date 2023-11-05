import Select, { Props } from 'react-select';

export function CustomSelect<Option, IsMulti extends boolean = false>(
  props: Props<Option, IsMulti>
) {
  return (
    <Select
      {...props}
      unstyled
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          transition: 'none',
        }),
      }}
      classNames={{
        container: () => 'text-sm w-[200px] font-semibold',
        control: () => 'shadow rounded p-4 bg-light-ui dark:bg-dark-ui',
        menu: () => 'p-4 bg-light-ui dark:bg-dark-ui mt-2 shadow rounded',
        menuList: () => 'flex flex-col gap-3',
        option: () => `hover:cursor-pointer hover:opacity-80`,
        indicatorsContainer: () => 'gap-1',
        indicatorSeparator: () => 'hidden',
        clearIndicator: () => 'hover:cursor-pointer',
      }}
    />
  );
}
