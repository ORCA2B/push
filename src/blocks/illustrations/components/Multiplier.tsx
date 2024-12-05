import { FC } from 'react';
import { IllustrationWrapper } from '../IllustrationWrapper';
import { IllustrationProps } from '../Illustrations.types';

const Multiplier: FC<IllustrationProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IllustrationWrapper
      componentName="Multiplier"
      illustration={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={restProps.width ?? '32'}
          height={restProps.height ?? '28'}
          viewBox="0 0 32 28"
          fill="none"
          {...props}
        >
          <g clip-path="url(#clip0_5492_24561)">
            <path
              d="M11.2736 27.255C9.36652 27.255 7.58858 26.2319 6.63505 24.5831L2.07599 16.6768C1.12246 15.028 1.12246 12.9719 2.07599 11.3231L6.64498 3.41674C7.59851 1.76793 9.37645 0.744873 11.2835 0.744873H20.4116C22.3186 0.744873 24.0966 1.76793 25.0501 3.41674L29.6092 11.3231C30.5627 12.9719 30.5627 15.028 29.6092 16.6768L25.0501 24.5831C24.0966 26.2319 22.3186 27.255 20.4116 27.255H11.2835H11.2736Z"
              fill="#23C989"
            />
            <path
              d="M20.4015 1.48989C22.0404 1.48989 23.57 2.37389 24.3945 3.79425L28.9535 11.7006C29.7779 13.121 29.7779 14.889 28.9535 16.3093L24.3945 24.2157C23.57 25.636 22.0504 26.52 20.4015 26.52H11.2735C9.63461 26.52 8.10499 25.636 7.28058 24.2157L2.72152 16.3093C1.89711 14.889 1.89711 13.121 2.72152 11.7006L7.29051 3.79425C8.11492 2.37389 9.63461 1.48989 11.2834 1.48989H20.4115M20.4015 0H11.2735C9.09825 0 7.08193 1.16211 5.99928 3.04931L1.43028 10.9557C0.337693 12.8429 0.337693 15.1671 1.43028 17.0543L5.98934 24.9606C7.08193 26.8478 9.08832 28.0099 11.2636 28.0099H20.3916C22.5669 28.0099 24.5832 26.8478 25.6658 24.9606L30.2249 17.0543C31.3175 15.1671 31.3175 12.8429 30.2249 10.9557L25.6658 3.04931C24.5732 1.16211 22.5669 0 20.3916 0L20.4015 0Z"
              fill="#2E8B6F"
            />
            <path
              d="M21.5834 11.8694L16.2496 6.24751C16.0311 6.01906 15.6437 6.01906 15.4252 6.24751L10.0914 11.8694C9.78347 12.1971 10.0318 12.7037 10.5085 12.7037H12.5547C12.7235 12.7037 12.8526 12.8229 12.8526 12.9818V15.4054C12.8526 15.7232 13.1308 15.9815 13.4784 15.9815H18.1864C18.5341 15.9815 18.8122 15.7232 18.8122 15.4054V12.9818C18.8122 12.8328 18.9413 12.7037 19.1102 12.7037H21.1563C21.6231 12.7037 21.8814 12.1971 21.5735 11.8694H21.5834Z"
              fill="white"
            />
            <path
              d="M18.4744 16.7463H13.2002C12.9917 16.7463 12.8228 16.9153 12.8228 17.1238V18.5839C12.8228 18.7923 12.9917 18.9613 13.2002 18.9613H18.4744C18.6829 18.9613 18.8518 18.7923 18.8518 18.5839V17.1238C18.8518 16.9153 18.6829 16.7463 18.4744 16.7463Z"
              fill="#92FFDB"
            />
            <path
              d="M18.4744 19.7361H13.2002C12.9917 19.7361 12.8228 19.9051 12.8228 20.1135V20.8982C12.8228 21.1067 12.9917 21.2756 13.2002 21.2756H18.4744C18.6829 21.2756 18.8518 21.1067 18.8518 20.8982V20.1135C18.8518 19.9051 18.6829 19.7361 18.4744 19.7361Z"
              fill="#A9FFE2"
            />
          </g>
          <defs>
            <clipPath id="clip0_5492_24561">
              <rect
                width="30.4434"
                height="28"
                fill="white"
                transform="translate(0.615723)"
              />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default Multiplier;