import avatar1 from '../../../public/assets/images/users/avatar-1.jpg'
import avatar3 from '../../../public/assets/images/users/avatar-3.jpg'
import avatar5 from '../../../public/assets/images/users/avatar-5.jpg'
import { NotificationType } from '@/types/data'

export const notificationsData: NotificationType[] = [
  {
    from: 'Josephine Thompson',
    content: 'commented on admin panel "Wow 😍! this admin looks good and awesome design"',
    icon: avatar1,
  },
  {
    from: 'Donoghue Susan',
    content: 'Hi, How are you? What about our next meeting',
  },
  {
    from: 'Jacob Gines',
    content: "Answered to your comment on the cash flow forecast's graph 🔔.",
    icon: avatar3,
  },
  {
    from: 'Shawn Bunch',
    content: 'Commented on Admin',
    icon: avatar5,
  },
  {
    from: 'Vanessa R. Davis',
    content: 'Delivery processing your order is being shipped',
  },
]
