import { AkunBank } from "./akun";
import { Bank } from "./bank";

const BSI = new Bank("Bank Syariah Indonesia", "Jakarta");
const BCA = new Bank("Bank Central Indonesia", "SCBD");

const ucup = new AkunBank(BSI,"Yusuf ramadhani",1000000,"1112222333")

// BSI.getNama();
// BSI.getAlamat();
// BCA.getNama();
// BCA.getAlamat();

// ucup.getNama()
// ucup.getPemilik()
// ucup.getSaldo()
// ucup.getRekening()

// ucup.deposit(15000000)
// ucup.getSaldo()
// ucup.tarik(1000000)
// ucup.getSaldo()

