export interface IMessage {
  id: number;
  ownerUsername: string;
  ownerId: number;
  text: string;
  chatId: number;
  dispatchDate: Date;
}
