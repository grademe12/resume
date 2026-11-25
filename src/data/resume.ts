// 이력서의 모든 내용. 두 버전(DevOps, 네트워크)은 같은 사실을 쓰고 순서와 강조만 다릅니다.

export const PERSON = {
  name: '박우성',
  email: 'grademe12@gmail.com',
  github: 'https://github.com/grademe12',
  portfolio: 'https://woosupar.dev',
};

export type Project = {
  id: string;
  name: string;
  period: string;
  team: string;
  stack: string;
  points: string[];
  link: string;
};

// 프로젝트 하나에 두 관점의 요약을 둡니다. 버전마다 맞는 쪽을 씁니다.
const P = {
  stagelog: {
    name: 'Stagelog',
    period: '2026.01 – 2026.03',
    team: '팀 프로젝트 5인',
    link: 'https://woosupar.dev/projects/stagelog/',
  },
  stock: {
    name: '모의 주식 거래소',
    period: '2026.06 – 진행 중',
    team: '개인 프로젝트',
    link: 'https://woosupar.dev/projects/stock-market/',
  },
  homelab: {
    name: '홈랩',
    period: '운영 중',
    team: '개인 프로젝트',
    link: 'https://woosupar.dev/projects/homelab/',
  },
  dm: {
    name: 'LLM 에이전트 제어 계층',
    period: '2026.10 – 진행 중',
    team: '개인 프로젝트',
    link: 'https://woosupar.dev/projects/dm-roleplaying/',
  },
  k8s: {
    name: '멀티 클러스터 모니터',
    period: '2025.10',
    team: '개인 프로젝트',
    link: 'https://woosupar.dev/projects/k8s-multi-cloud-monitor/',
  },
  pearl: {
    name: 'Pearl Invest',
    period: '2025.09',
    team: '개인 프로젝트',
    link: 'https://woosupar.dev/projects/pearl-invest/',
  },
};

export type Variant = {
  slug: 'devops' | 'network';
  label: string;
  role: string;
  summary: string;
  skills: { group: string; items: string }[];
  projects: Project[];
  certs: { when: string; name: string }[];
};

export const EDUCATION = [
  { when: '2025.10 – 2026.03', name: '구름 클라우드 네이티브 엔지니어링 과정 6회차', note: '팀 프로젝트 3회, 마지막 프로젝트 Stagelog' },
  { when: '2024.09 – 2026.02', name: '컴퓨터공학 학사 (학점은행제)', note: '42서울과 병행해 취득' },
  { when: '2023.10 – 2025.10', name: '42서울', note: 'C로 셸과 레이 트레이서 구현, Docker Compose 인프라, 서브넷 설계 과제' },
  { when: '2012.03 – 2019.08', name: '경제학 학사', note: '' },
];

export const DEVOPS: Variant = {
  slug: 'devops',
  label: 'DevOps',
  role: '클라우드, DevOps 엔지니어',
  summary:
    '인프라를 Terraform으로 만들고, 직접 운영하면서 지표로 병목을 찾아 고칩니다. 팀에서는 EKS 기반 MSA 인프라를 수명주기별 스택으로 나눠 개발 서버 가동 시간을 73% 줄였고, 개인 프로젝트에서는 매칭 엔진의 병목을 단계별로 재며 같은 부하에서 처리량을 18배 끌어올렸습니다.',
  skills: [
    { group: '인프라 코드', items: 'Terraform, Helm, ArgoCD, Argo Rollouts, GitHub Actions (OIDC), Docker Compose' },
    { group: '클라우드', items: 'AWS (VPC, EKS, RDS, S3, CloudFront, API Gateway, Lambda, WAF), Azure, NCP (NKS), GCP (GCE)' },
    { group: '관측', items: 'Prometheus, Grafana, Loki, Kubecost, k6' },
    { group: '언어', items: 'Python (Django), TypeScript (NestJS), C' },
    { group: '네트워크', items: 'VPC 설계, VPC Endpoint, Tailscale, Teleport RBAC, Cloudflare DNS' },
  ],
  projects: [
    {
      id: 'stagelog',
      ...P.stagelog,
      stack: 'Terraform, EKS, ArgoCD, Karpenter, API Gateway, Lambda',
      points: [
        'Terraform 스택을 수명주기(영구, EKS, 임시)로 나눠, 클러스터를 매일 내려도 DNS, 인증서, 데이터가 남게 설계',
        '배포와 삭제를 스크립트로 묶어 개발 서버를 평일 업무 시간에만 운영, 가동 시간 73% 감소 (월 약 $300 절감 추정, 청구서로 확인)',
        '모놀리식 Django를 4개 서비스로 분리하고 인증을 Lambda authorizer로 분리, EKS IRSA와 VPC Link 구성 (인프라 레포 커밋 팀 내 1위)',
      ],
    },
    {
      id: 'stock',
      ...P.stock,
      stack: 'Django, Azure, Terraform, GitHub Actions, Prometheus',
      points: [
        '가상 트레이더 수천 명의 부하를 걸고 병목을 단계별로 측정, 보고서 7편으로 정리',
        '잔량에 비례하던 호가창 연산을 재작성해 같은 잔량에서 초당 주문 30건 → 555건, p50 364ms → 2.7ms',
        '게이트웨이 접속 대기열이 기본값 5인 것을 커널 카운터로 찾아 접수량 약 290건/s → 550건/s',
        'GCP 종료 후 Terraform으로 Azure에 재구축, GitHub OIDC와 Run Command로 SSH 포트 없이 배포',
      ],
    },
    {
      id: 'dm',
      ...P.dm,
      stack: 'Python, SQLite, LLM API',
      points: [
        '실제 메신저로 대화하는 LLM 에이전트의 상태 반영과 발송을 코드와 DB 제약으로 보장 (테스트 1,100여 개)',
        '사용량 내보내기와 판단 기록을 맞춰 토큰을 단계별로 분해, 대화 없는 시간의 비용 96% 감소',
        '첫 결론(72% 감소)이 단위 오류였음을 찾아 정정하고 과정을 공개',
      ],
    },
    {
      id: 'k8s',
      ...P.k8s,
      stack: 'NestJS, Next.js, Terraform, NKS',
      points: [
        '네이버 클라우드에 Terraform으로 VPC, NKS, PostgreSQL을 구성하고 GitHub Actions로 배포',
        '여러 파드가 같은 지표를 중복 수집하던 문제를 PostgreSQL advisory lock으로 해결',
      ],
    },
  ],
  certs: [{ when: '2025.12', name: 'AWS Certified Solutions Architect – Associate' }],
};

export const NETWORK: Variant = {
  slug: 'network',
  label: '네트워크',
  role: '네트워크, 인프라 엔지니어',
  summary:
    '망을 나누고, 들어오는 길을 최소로 열고, 연결이 어디서 막히는지 재서 찾습니다. 홈랩은 공유기 인바운드 포트 0개로 운영하고, 클라우드에서는 VPC와 사설 연결을 설계했습니다. 지금은 CCNA를 준비하며 Cisco 장비 실습 랩을 구성하고 있습니다.',
  skills: [
    { group: '네트워크', items: 'TCP/IP, 서브넷 설계, NAT, DNS, TLS, VPN (Tailscale, WireGuard), Wake-on-LAN' },
    { group: '보안, 접근 제어', items: 'Teleport RBAC, AWS WAF, 보안 그룹과 NSG, VPC Endpoint, CloudFront OAC' },
    { group: '산업 프로토콜', items: 'Modbus TCP, OPC-UA, MQTT' },
    { group: '진단', items: 'Wireshark, 커널 TCP 카운터, Prometheus, Grafana' },
    { group: '인프라 코드', items: 'Terraform (AWS, Azure, NCP, Cloudflare), GitHub Actions, Docker' },
  ],
  projects: [
    {
      id: 'homelab',
      ...P.homelab,
      stack: 'Tailscale, Debian, Docker, Cloudflare, Terraform',
      points: [
        '미니 PC, 라즈베리파이, 데스크톱, 노트북, 휴대폰을 Tailnet 하나로 묶고 공유기 인바운드 포트 0개로 운영 (SSH, 원격 데스크톱 포함)',
        '정전 뒤 자동으로 켜지는 라즈베리파이를 Wake-on-LAN 허브로 두어 다른 장비를 원격 부팅',
        '공개 사이트는 집 밖 Cloudflare로 분리하고, 도메인 연결과 HTTPS 강제, 최소 TLS 1.2를 Terraform으로 관리',
      ],
    },
    {
      id: 'stagelog',
      ...P.stagelog,
      stack: 'AWS VPC, API Gateway, WAF, CloudFront, EKS',
      points: [
        'API Gateway를 VPC Link로 internal ALB에 연결해 서비스를 사설망에 두고, 인증은 Lambda authorizer에서 처리',
        'Interface VPC Endpoint와 STS Endpoint로 클러스터의 AWS API 호출을 사설 경로로 구성',
        '이전 단계에서 운영 서비스를 직접 공격해 점검: WAF 속도 제한으로 무차별 요청 139건 차단, TLS 적용 후 Wireshark로 핸드셰이크 확인, S3 직접 접근을 CloudFront OAC로 차단',
      ],
    },
    {
      id: 'stock',
      ...P.stock,
      stack: 'Tailscale, Azure, Linux, Prometheus',
      points: [
        '처리 지연이 수 ms인데 클라이언트가 기다리는 원인을 커널 카운터(ListenOverflows, 초당 약 770)로 추적, 접속 대기열 5 → 2048로 접수량 약 2배',
        'Tailscale ACL 때문에 일부 샤드 포트가 막힌 문제를, 포트를 더 여는 대신 단일 진입점 라우터로 해결',
        '백엔드 VM에 공개 포트 없이 Tailscale만 허용 (NSG는 WireGuard 직접 연결용 UDP 하나)',
      ],
    },
    {
      id: 'pearl',
      ...P.pearl,
      stack: 'Teleport, K3s, AWS EC2, Modbus, OPC-UA',
      points: [
        '집의 K3s 서비스에 Teleport로만 접근하게 해 역할별 접근 범위와 세션 녹화를 적용, 공유기 포트는 열지 않음',
        '스마트공장 시뮬레이션에서 Modbus TCP를 OPC-UA로 바꾸는 게이트웨이와 센서 관제 구성',
      ],
    },
  ],
  certs: [
    { when: '2025.12', name: 'AWS Certified Solutions Architect – Associate' },
    { when: '준비 중', name: 'CCNA' },
  ],
};

export const VARIANTS = [DEVOPS, NETWORK];
