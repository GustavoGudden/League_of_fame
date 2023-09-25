import { SvgRoleProps } from '@/common/interfaces/svg.interface';

export function Fighters({ fill, size }: SvgRoleProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.45736 4.6166V3.16206L11.1008 4.11067V7.52569C10.9767 7.61001 10.6667 7.82925 10.4186 8.03162C10.1705 6.96917 9.24031 6.8722 8.8062 6.95652L9.48837 5.05929L5.45736 4.6166Z"
        fill={fill}
      />
      <path
        d="M10.6667 13.3439L9.36434 7.96838L6.44961 7.65217V6.95652H7.25581C7.90078 6.95652 8.10336 6.23979 8.12403 5.88142L5.02326 5.62846L4.21705 7.46245L6.13953 10.3715L5.2093 13.5336L7.93798 16L10.6667 13.3439Z"
        fill={fill}
      />
      <path d="M10.0465 1.13834L11.5969 0.379447L11.1008 2.08696H10.1085L10.0465 1.13834Z" fill={fill} />
      <path d="M7.1938 1.64427L7.93798 0L8.68217 1.64427L7.93798 2.33992L7.1938 1.64427Z" fill={fill} />
      <path d="M4.65116 2.1502L4.27907 0.379447L5.82946 1.13834V2.1502H4.65116Z" fill={fill} />
      <path
        d="M12.093 4.67984C14.1271 2.90909 14.6357 0.864295 14.6357 0.0632411C17.6124 6.83004 13.9535 9.42293 13.2093 9.92885C12.2667 8.81581 11.2868 9.54941 10.9147 10.0553V9.10672L12.093 7.96838V4.67984Z"
        fill={fill}
      />
      <path d="M11.6589 13.7866L11.1628 11.004L14.2016 13.6601L16 13.7866L13.8295 16L11.6589 13.7866Z" fill={fill} />
      <path
        d="M4.15502 4.93281C1.6744 3.01028 1.21962 0.885376 1.30231 0.0632411C-1.73646 5.75494 1.79844 9.35968 2.66666 9.9921C3.11317 9.2332 3.96899 9.29644 4.34108 9.42293L3.10077 7.77866C3.32816 7.10408 3.85736 5.59051 4.15502 4.93281Z"
        fill={fill}
      />
      <path d="M4.15504 13.5336L5.02326 10.6245L1.9845 13.4071L0 13.5336L2.04651 15.8735L4.15504 13.5336Z" fill={fill} />
    </svg>
  );
}